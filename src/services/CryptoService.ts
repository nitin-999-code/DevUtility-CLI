import axios from 'axios';

export class CryptoService {
    static async getPrice(coin: string) {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`);
        return response.data;
    }
}
