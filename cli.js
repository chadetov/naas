#!/usr/bin/env node
'use strict';

/**
 * `nothing` — the official NaaS command-line interface.
 * Does nothing, locally, no network required. Air-gapped by design.
 */

const args = process.argv.slice(2);
const cmd = args[0];

const HELP = `
  nothing — the NaaS CLI v1.1.0

  Usage:
    nothing                 Do nothing (default)
    nothing now             Do nothing, immediately
    nothing --help          Show this help, then do nothing
    nothing --version       Print version, then do nothing
    nothing everything      Refuse (enterprise feature)
    nothing harder          Do nothing, but with more conviction

  Exit codes:
    0   nothing happened (success)
`;

switch (cmd) {
  case '--help':
  case '-h':
  case 'help':
    process.stdout.write(HELP + '\n');
    break;

  case '--version':
  case '-v':
    process.stdout.write('1.1.0\n');
    break;

  case 'everything':
    process.stderr.write('Error: `everything` is an enterprise feature. Contact sales.\n');
    process.exit(402 % 256);
    break;

  case 'harder':
    process.stdout.write('Doing nothing... harder.\n');
    process.stdout.write('Done. Nothing happened, but it felt significant.\n');
    break;

  case undefined:
  case 'now':
  default:
    // The core experience. We do not insult it with output.
    process.exit(0);
}
