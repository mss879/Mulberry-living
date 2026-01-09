import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Stay = Database['public']['Tables']['stays']['Row'];
type StayUpdate = Database['public']['Tables']['stays']['Update'];

export function useStays() {
  return useQuery({
    queryKey: ['stays'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stays')
        .select('*')
        .eq('is_visible', true)
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data as Stay[];
    },
  });
}

export function useStay(slug: string) {
  return useQuery({
    queryKey: ['stay', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stays')
        .select('*')
        .eq('slug', slug)
        .eq('is_visible', true)
        .single();
      
      if (error) throw error;
      return data as Stay;
    },
    enabled: !!slug,
  });
}

export function useAllStays() {
  return useQuery({
    queryKey: ['allStays'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stays')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data as Stay[];
    },
  });
}

export function useUpdateStay() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: StayUpdate }) => {
      const { data, error } = await supabase
        .from('stays')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stays'] });
      queryClient.invalidateQueries({ queryKey: ['allStays'] });
    },
  });
}
