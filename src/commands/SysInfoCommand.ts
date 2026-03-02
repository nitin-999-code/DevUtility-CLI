import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { logger } from '../utils/logger';
import os from 'os';
import chalk from 'chalk';

export class SysInfoCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('sysinfo')
            .description('Display system information')
            .action(() => {
                logger.success('System Information:');
                logger.raw(`Platform: ${chalk.cyan(os.platform())}`);
                logger.raw(`Architecture: ${chalk.cyan(os.arch())}`);
                logger.raw(`CPU Cores: ${chalk.yellow(os.cpus().length.toString())}`);
                const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
                const freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
                logger.raw(`Total Memory: ${chalk.green(totalMem + ' GB')}`);
                logger.raw(`Free Memory: ${chalk.green(freeMem + ' GB')}`);
            });
    }
}
