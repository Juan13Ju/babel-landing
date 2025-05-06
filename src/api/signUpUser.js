const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_KEY;

export const uploadEmail = async (email) => {
  const response = await fetch(`${supabaseUrl}/rest/v1/emails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ email })
  });

  return response.ok;
};
