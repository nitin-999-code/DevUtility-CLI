import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { logger } from '../utils/logger';
import chalk from 'chalk';

export class TimeCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('time')
            .description('Display current date and time')
            .action(() => {
                const now = new Date();
                logger.success('Current Date and Time:');
                logger.raw(chalk.cyan(now.toLocaleString()));
            });
    }
}
