export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Missing code parameter", { status: 400 });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenResponse.json();
  const token = data.access_token;

  if (!token) {
    return new Response("OAuth token exchange failed", { status: 401 });
  }

  const message = JSON.stringify({ token, provider: "github" });

  return new Response(
    `<!doctype html><html><body><script>
    (function() {
      function handle(e) {
        window.opener.postMessage(
          'authorization:github:success:${message}',
          e.origin
        );
      }
      window.addEventListener("message", handle, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
    </script></body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
};
