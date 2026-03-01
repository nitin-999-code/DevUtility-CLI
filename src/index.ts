#!/usr/bin/env node

import { Command } from 'commander';
import { GreetCommand } from './commands/GreetCommand';
import { GithubCommand } from './commands/GithubCommand';
import { CryptoCommand } from './commands/CryptoCommand';
import { CountryCommand } from './commands/CountryCommand';
import { FileInfoCommand } from './commands/FileInfoCommand';
import { PasswordCommand } from './commands/PasswordCommand';
import { SysInfoCommand } from './commands/SysInfoCommand';
import { JokeCommand } from './commands/JokeCommand';
import { VersionCommand } from './commands/VersionCommand';
import { TimeCommand } from './commands/TimeCommand';
import { ConvertCommand } from './commands/ConvertCommand';

const program = new Command();

program
    .name('devutility')
    .description('A modular CLI utility tool for developers')
    .version('1.0.0', '-v, --version', 'Output the current version');

// Register commands
const commands = [
    new GreetCommand(),
    new GithubCommand(),
    new CryptoCommand(),
    new CountryCommand(),
    new FileInfoCommand(),
    new PasswordCommand(),
    new SysInfoCommand(),
    new JokeCommand(),
    new VersionCommand(),
    new TimeCommand(),
    new ConvertCommand()
];

commands.forEach(cmd => cmd.register(program));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
