import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { logger } from '../utils/logger';
import crypto from 'crypto';
import chalk from 'chalk';

export class PasswordCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('password <length>')
            .description('Generate a strong random password of given length')
            .action((lengthStr: string) => {
                const length = parseInt(lengthStr, 10);
                if (isNaN(length) || length <= 0) {
                    logger.error('Length must be a positive number');
                    return;
                }

                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
                let password = '';
                for (let i = 0; i < length; i++) {
                    const randomIndex = crypto.randomInt(0, chars.length);
                    password += chars[randomIndex];
                }

                logger.success('Generated Password:');
                logger.raw(chalk.bold.green(password));
            });
    }
}
