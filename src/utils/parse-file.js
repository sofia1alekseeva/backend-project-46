import fs from 'fs';
import parseFilepath from './parse-filepath.js';
import parseFormat from './parse-format.js';

export default function parseFile(filepath) {
  const absolutePath = parseFilepath(filepath);
  const format = parseFormat(filepath);
  const file = fs.readFileSync(absolutePath);
  if (format === '.json') {
    return JSON.parse(file);
  }
  throw new Error('Unexpected format. Use .json or .yaml');
}
