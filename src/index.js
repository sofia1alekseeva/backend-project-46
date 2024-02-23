#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

export default function usageHelp() {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-v, -V, --version', 'output the version number')
    .helpOption('-h, -H, --help', 'output usage information')
    .showHelpAfterError()
    .parse(process.argv);
}
