import chalk from 'chalk';

export const logger = {
    info: (msg: string) => console.log(chalk.blue(msg)),
    success: (msg: string) => console.log(chalk.green(msg)),
    error: (msg: string) => console.error(chalk.red('[ERROR] ' + msg)),
    warning: (msg: string) => console.log(chalk.yellow('[WARN] ' + msg)),
    raw: (msg: string) => console.log(msg),
};
