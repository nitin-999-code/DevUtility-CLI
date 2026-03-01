import axios from 'axios';

export interface CurrencyConversionResponse {
    amount: number;
    base: string;
    date: string;
    rates: {
        [key: string]: number;
    };
}

export class CurrencyService {
    static async convert(amount: number, from: string, to: string): Promise<{ rate: number, result: number } | null> {
        try {
            const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from.toUpperCase()}&to=${to.toUpperCase()}`;
            const response = await axios.get<CurrencyConversionResponse>(url);

            if (response.data && response.data.rates && response.data.rates[to.toUpperCase()]) {
                const result = response.data.rates[to.toUpperCase()];
                const rate = result / amount;
                return { rate, result };
            }
            throw new Error('Invalid response from currency API.');
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 404) {
                    throw new Error(`Invalid currency code or unsupported conversion.`);
                }
                throw new Error(`API Error: ${error.response.statusText} (${error.response.status})`);
            }
            throw new Error(`Failed to convert currency: ${error.message}`);
        }
    }
}
