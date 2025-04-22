import { supabase } from '../lib/supabase';

export async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createPost(title: string, content: string) {
  const { data, error } = await supabase
    .from('posts')
    .insert([{ title, content }]);

  if (error) throw error;
  return data;
}