#!/usr/bin/env node
'use strict';

/**
 * NaaS — Nothing as a Service™
 * The reference implementation of nothing.
 *
 * Architectural note: this file contains the maximum amount of code
 * legally permitted while still delivering nothing.
 */

const http = require('http');

const PORT = process.env.PORT || 1984;

// Headers attached to every response. Compliance is mandatory.
const NOTHING_HEADERS = {
  'X-Powered-By': 'Sheer Force of Will',
  'X-Nothing-Region': process.env.NOTHING_REGION || 'us-void-1',
  'X-Existential-Status': 'at peace',
  'X-Cache': 'HIT (it is all the same nothing)',
  'Cache-Control': 'public, max-age=31536000, immutable, forever',
};

// A landing page, served only because the void abhors a 404.
const LANDING = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NaaS — Nothing as a Service™</title>
  <style>
    :root { color-scheme: dark; }
    * { margin: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at 50% 30%, #1a1a2e, #000);
      color: #e6e6e6;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      text-align: center;
      padding: 2rem;
    }
    .wrap { max-width: 640px; }
    h1 { font-size: clamp(2.5rem, 8vw, 5rem); letter-spacing: -0.04em; }
    .sub { opacity: 0.6; margin-top: 0.5rem; }
    .void {
      margin: 3rem auto;
      width: 180px; height: 180px;
      border-radius: 50%;
      background: #000;
      box-shadow: 0 0 80px 20px rgba(120,120,255,0.25), inset 0 0 60px #000;
      animation: breathe 6s ease-in-out infinite;
    }
    @keyframes breathe {
      0%,100% { transform: scale(1); opacity: 0.9; }
      50%     { transform: scale(1.06); opacity: 1; }
    }
    code { background: #ffffff14; padding: 0.15em 0.45em; border-radius: 6px; }
    .status { margin-top: 2rem; opacity: 0.45; font-size: 0.85rem; }
    a { color: #8ab4ff; }
  </style>
</head>
<body>
  <main class="wrap">
    <h1>NaaS</h1>
    <p class="sub">Nothing as a Service™ — delivered.</p>
    <div class="void" title="your nothing, rendered in real time"></div>
    <p>Your nothing is being served at 0ms latency, globally.</p>
    <p class="status">
      Try the API: <code>curl -i $URL/v1/nothing</code><br>
      Uptime: ∞ &nbsp;·&nbsp; Incidents: 0 &nbsp;·&nbsp; Regret: 0
    </p>
  </main>
</body>
</html>`;

function send(res, status, headers, body) {
  res.writeHead(status, { ...NOTHING_HEADERS, ...headers });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = (req.url || '/').split('?')[0].replace(/\/+$/, '') || '/';
  const route = `${req.method} ${url}`;

  switch (route) {
    case 'GET /':
      send(res, 200, { 'Content-Type': 'text/html; charset=utf-8' },
        LANDING.replace(/\$URL/g, `http://localhost:${PORT}`));
      break;

    // The flagship product.
    case 'GET /v1/nothing':
    case 'POST /v1/nothing':
      send(res, 204, {}, '');
      break;

    // The premium offering. Behind a paywall, naturally.
    case 'GET /v1/everything':
      send(res, 402, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Everything is an enterprise feature. Contact sales.' }));
      break;

    case 'GET /health':
      send(res, 200, { 'Content-Type': 'application/json' },
        JSON.stringify({ status: 'healthy', reason: 'there is nothing to fail' }));
      break;

    case 'GET /metrics':
      send(res, 200, { 'Content-Type': 'text/plain; charset=utf-8' },
        [
          '# HELP naas_nothing_served_total The void, quantified.',
          '# TYPE naas_nothing_served_total counter',
          'naas_nothing_served_total 0',
          'naas_uptime_seconds +Inf',
          'naas_regret_total 0',
          'naas_things_accidentally_done_total 0',
        ].join('\n') + '\n');
      break;

    default:
      // Even our 404 returns nothing of substance.
      send(res, 404, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Not found. But honestly, what did you expect?' }));
  }
});

server.listen(PORT, () => {
  console.log(`
  NaaS — Nothing as a Service™
  ────────────────────────────
  Now serving nothing at http://localhost:${PORT}
  Region: ${NOTHING_HEADERS['X-Nothing-Region']}   Status: at peace

  Endpoints:
    GET  /v1/nothing     → 204 (the flagship)
    GET  /v1/everything  → 402 (enterprise)
    GET  /health         → always healthy
    GET  /metrics        → the void, quantified

  Press Ctrl+C to stop. Or don't. Nothing changes either way.
`);
});
