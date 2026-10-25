// Dola uses its own binding without changing other domains' delivery providers.
export function cloudflareEmailBinding(env, sender) {
  const domain = String(sender).split('@').pop().toLowerCase();
  if (domain === 'dolaaihub.com' && env.DOLA_EMAIL) return env.DOLA_EMAIL;
  return env.email || null;
}
