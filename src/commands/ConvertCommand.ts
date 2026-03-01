import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { CurrencyService } from '../services/CurrencyService';
import { logger } from '../utils/logger';
import { handleError } from '../utils/errorHandler';
import chalk from 'chalk';

export class ConvertCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('convert <amount> <from> <to>')
            .description('Convert currency between two currencies')
            .action(async (amountStr: string, from: string, to: string) => {
                try {
                    const amount = parseFloat(amountStr);

                    if (isNaN(amount) || amount <= 0) {
                        logger.error('Amount must be a positive number.');
                        return;
                    }

                    if (!/^[A-Za-z]{3}$/.test(from) || !/^[A-Za-z]{3}$/.test(to)) {
                        logger.error('Currency codes must be 3-letter codes (e.g., USD, INR).');
                        return;
                    }

                    const fromCurrency = from.toUpperCase();
                    const toCurrency = to.toUpperCase();

                    logger.info(`Converting ${amount} ${fromCurrency} to ${toCurrency}...`);

                    const data = await CurrencyService.convert(amount, fromCurrency, toCurrency);

                    if (data) {
                        const rate = data.rate;
                        const result = data.result;

                        console.log(chalk.bold.cyan('\nCurrency Conversion:'));
                        console.log(`${chalk.bold(amount.toString())} ${chalk.green(fromCurrency)} = ${chalk.bold(result.toFixed(2))} ${chalk.green(toCurrency)}`);
                        console.log(`Exchange Rate: 1 ${chalk.green(fromCurrency)} = ${rate.toFixed(4)} ${chalk.green(toCurrency)}\n`);
                    } else {
                        logger.error('Invalid response received from the conversion service.');
                    }
                } catch (error: any) {
                    handleError(error);
                }
            });
    }
}
