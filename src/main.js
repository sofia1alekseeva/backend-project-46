#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from './utils/parse-file.js';
import compareDifference from './utils/compare-diff.js';

const program = new Command();

export default function genDiff() {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-v, -V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .helpOption('-h, --help', 'output usage information')
    .showHelpAfterError()
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2) => {
      const file1Data = parseFile(filepath1);
      const file2Data = parseFile(filepath2);
      console.log('filepath1:', file1Data);
      console.log('filepath2:', file2Data);
      const result = compareDifference(file1Data, file2Data);
      console.log(result);
    })
    .parse(process.argv);
}
