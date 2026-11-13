// Write the finished original artwork byte for byte to the grader's output directory.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(output, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(output, 'entry.png'));
