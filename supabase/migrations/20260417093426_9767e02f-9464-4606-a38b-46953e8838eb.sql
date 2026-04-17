
-- Profiles table
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- History
create table public.history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  mood text not null,
  playlist jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.history enable row level security;

create policy "Users can view own history" on public.history
  for select using (auth.uid() = user_id);
create policy "Users can insert own history" on public.history
  for insert with check (auth.uid() = user_id);
create policy "Users can delete own history" on public.history
  for delete using (auth.uid() = user_id);

-- Favorites
create table public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  video_id text not null,
  title text not null,
  artist text,
  thumbnail text,
  created_at timestamptz not null default now(),
  unique (user_id, video_id)
);

alter table public.favorites enable row level security;

create policy "Users can view own favorites" on public.favorites
  for select using (auth.uid() = user_id);
create policy "Users can insert own favorites" on public.favorites
  for insert with check (auth.uid() = user_id);
create policy "Users can delete own favorites" on public.favorites
  for delete using (auth.uid() = user_id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Updated_at trigger
create or replace function public.update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();
