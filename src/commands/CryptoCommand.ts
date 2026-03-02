import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { CryptoService } from '../services/CryptoService';
import { logger } from '../utils/logger';
import { handleError } from '../utils/errorHandler';
import chalk from 'chalk';

export class CryptoCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('crypto <coin>')
            .description('Get current price of a cryptocurrency in USD (e.g., bitcoin, ethereum)')
            .action(async (coin: string) => {
                try {
                    logger.info(`Fetching price for ${coin}...`);
                    const data = await CryptoService.getPrice(coin.toLowerCase());
                    const priceStr = data[coin.toLowerCase()]?.usd;
                    if (priceStr) {
                        logger.success(`Current price of ${chalk.bold(coin)}: ${chalk.green('$' + priceStr)}`);
                    } else {
                        logger.error(`Could not find price for '${coin}'. Ensure the coin ID is correct.`);
                    }
                } catch (error: any) {
                    handleError(error);
                }
            });
    }
}
