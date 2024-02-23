import path from 'path';

export default function parseFormat(filePath) {
  return path.parse(filePath).ext;
}
