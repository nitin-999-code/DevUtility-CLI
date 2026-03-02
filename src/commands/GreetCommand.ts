import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { logger } from '../utils/logger';

export class GreetCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('greet <name>')
            .description('Greet a user by their name')
            .action((name: string) => {
                if (!name) {
                    logger.error('Name is required');
                    return;
                }
                logger.success(`Hello, ${name}! Welcome to DevUtility CLI.`);
            });
    }
}
