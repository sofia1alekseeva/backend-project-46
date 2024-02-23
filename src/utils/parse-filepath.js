import path from 'path';
import { cwd } from 'process';

export default function parseFilepath(filepath) {
  if (path.isAbsolute(filepath)) {
    return filepath;
  }
  return `${cwd()}/${filepath}`;
}
