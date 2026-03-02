import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { logger } from '../utils/logger';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

export class VersionCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('version')
            .description('Output the current version of DevUtility')
            .action(() => {
                try {
                    const packageJsonPath = path.resolve(__dirname, '../../package.json');
                    if (fs.existsSync(packageJsonPath)) {
                        const pkgInfo = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
                        logger.success(`DevUtility CLI Version: ${chalk.bold.yellow(pkgInfo.version)}`);
                    } else {
                        logger.success(`DevUtility CLI Version: ${chalk.bold.yellow('1.0.0')}`);
                    }
                } catch (error) {
                    logger.success(`DevUtility CLI Version: ${chalk.bold.yellow('1.0.0')}`);
                }
            });
    }
}
