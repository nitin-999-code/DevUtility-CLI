import axios from 'axios';

export class JokeService {
    static async getJoke() {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return response.data;
    }
}
