import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { JokeService } from '../services/JokeService';
import { logger } from '../utils/logger';
import { handleError } from '../utils/errorHandler';
import chalk from 'chalk';

export class JokeCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('joke')
            .description('Tell a random programming joke')
            .action(async () => {
                try {
                    const joke = await JokeService.getJoke();
                    logger.info(chalk.bold(joke.setup));
                    setTimeout(() => {
                        logger.success(chalk.italic(joke.punchline));
                    }, 2000);
                } catch (error: any) {
                    handleError(error);
                }
            });
    }
}
