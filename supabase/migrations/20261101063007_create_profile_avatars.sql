/*
# Create profile_avatars table

Stores which preset avatar each profile photo on the portfolio should display.
Each row is keyed by a profile identifier (the individual portfolio, or one of the three CodeNova members) and holds the index of a preset avatar chosen from the built-in list in the app.

1. New Tables
- `profile_avatars`
  - `profile_key` (text, primary key): one of 'individual', 'team-aarav', 'team-priya', 'team-rohan'.
  - `avatar_index` (smallint, not null): index of the chosen preset avatar, 0 to 7.
  - `updated_at` (timestamptz): when the choice was last changed.

2. Security
- Row level security is enabled.
- The app has no sign-in, so the anon and authenticated roles are granted access.
- SELECT is allowed for everyone, since the portfolio displays these photos publicly.
- INSERT and UPDATE are limited to the avatar_index and updated_at columns, and CHECK constraints restrict profile_key to the four known keys and avatar_index to 0-7.
- No DELETE is granted.

3. Important Notes
- Anyone visiting the site can change these photos because the app has no accounts. This is intentional for the demo.
- Rows are created on demand the first time a photo is changed; until then the app uses its built-in default avatars.
*/

CREATE TABLE IF NOT EXISTS profile_avatars (
  profile_key text PRIMARY KEY CHECK (profile_key IN ('individual', 'team-aarav', 'team-priya', 'team-rohan')),
  avatar_index smallint NOT NULL CHECK (avatar_index BETWEEN 0 AND 7),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE profile_avatars ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON profile_avatars TO anon, authenticated;
GRANT INSERT (profile_key, avatar_index, updated_at) ON profile_avatars TO anon, authenticated;
GRANT UPDATE (avatar_index, updated_at) ON profile_avatars TO anon, authenticated;

DROP POLICY IF EXISTS "public_select_profile_avatars" ON profile_avatars;
CREATE POLICY "public_select_profile_avatars" ON profile_avatars FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_profile_avatars" ON profile_avatars;
CREATE POLICY "public_insert_profile_avatars" ON profile_avatars FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_profile_avatars" ON profile_avatars;
CREATE POLICY "public_update_profile_avatars" ON profile_avatars FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);
