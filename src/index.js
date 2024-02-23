#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

export default function usageHelp() {
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
      console.log('filepath1:', filepath1);
      console.log('filepath2:', filepath2);
    })
    .parse(process.argv);
}
