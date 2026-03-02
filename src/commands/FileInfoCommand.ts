import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { logger } from '../utils/logger';
import { handleError } from '../utils/errorHandler';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export class FileInfoCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('fileinfo <filename>')
            .description('Get information about a local file')
            .action((filename: string) => {
                try {
                    const filePath = path.resolve(process.cwd(), filename);
                    if (!fs.existsSync(filePath)) {
                        logger.error(`File does not exist: ${filePath}`);
                        return;
                    }
                    const stats = fs.statSync(filePath);
                    logger.success(`File Information for ${filename}:`);
                    logger.raw(`Size: ${chalk.cyan(stats.size + ' bytes')}`);
                    logger.raw(`Created: ${chalk.yellow(stats.birthtime.toLocaleString())}`);
                    logger.raw(`Modified: ${chalk.yellow(stats.mtime.toLocaleString())}`);
                    logger.raw(`Is Directory: ${chalk.magenta(stats.isDirectory() ? 'Yes' : 'No')}`);
                } catch (error: any) {
                    handleError(error);
                }
            });
    }
}
