import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabaseClient';

export async function POST(req: Request) {
  const data = await req.json();
  const { title, description, level } = data;
  const { data: job, error } = await supabase
    .from('jobs')
    .insert([{ title, description, level }])
    .select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(job);
}