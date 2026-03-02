import axios from 'axios';

export class CountryService {
    static async getCountry(name: string) {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        return response.data;
    }
}
