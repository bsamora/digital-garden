export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const siteUrl = process.env.SITE_URL || "https://digital-garden-two-eta.vercel.app";
  const redirectUri = `${siteUrl}/api/callback`;

  return redirect(
    `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`,
    302
  );
};
