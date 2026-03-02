import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { GithubService } from '../services/GithubService';
import { logger } from '../utils/logger';
import { handleError } from '../utils/errorHandler';
import chalk from 'chalk';

export class GithubCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('github <username>')
            .description('Get GitHub user info')
            .action(async (username: string) => {
                try {
                    logger.info(`Fetching GitHub data for ${username}...`);
                    const data = await GithubService.getUser(username);
                    logger.success('User found:');
                    logger.raw(`Name: ${chalk.bold(data.name || data.login)}`);
                    logger.raw(`Bio: ${chalk.italic(data.bio || 'N/A')}`);
                    logger.raw(`Followers: ${chalk.cyan(data.followers)}`);
                    logger.raw(`Public Repos: ${chalk.cyan(data.public_repos)}`);
                    logger.raw(`URL: ${chalk.blue.underline(data.html_url)}`);
                } catch (error: any) {
                    if (error.response && error.response.status === 404) {
                        logger.error(`GitHub user '${username}' not found.`);
                    } else {
                        handleError(error);
                    }
                }
            });
    }
}
