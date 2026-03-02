import { Command } from 'commander';
import { BaseCommand } from './BaseCommand';
import { CountryService } from '../services/CountryService';
import { logger } from '../utils/logger';
import { handleError } from '../utils/errorHandler';
import chalk from 'chalk';

export class CountryCommand extends BaseCommand {
    register(program: Command): void {
        program
            .command('country <name>')
            .description('Get information about a country')
            .action(async (name: string) => {
                try {
                    logger.info(`Fetching information for ${name}...`);
                    const data = await CountryService.getCountry(name);
                    const country = data[0];
                    logger.success('Country Information:');
                    logger.raw(`Name: ${chalk.bold(country.name.common)}`);
                    logger.raw(`Capital: ${chalk.cyan(country.capital ? country.capital[0] : 'N/A')}`);
                    logger.raw(`Region: ${chalk.cyan(country.region)}`);
                    logger.raw(`Population: ${chalk.yellow(country.population.toLocaleString())}`);

                    const currencies = country.currencies ? Object.values(country.currencies).map((c: any) => c.name).join(', ') : 'N/A';
                    logger.raw(`Currency: ${chalk.green(currencies)}`);
                } catch (error: any) {
                    if (error.response && error.response.status === 404) {
                        logger.error(`Country '${name}' not found.`);
                    } else {
                        handleError(error);
                    }
                }
            });
    }
}
