import axios from 'axios';

export class GithubService {
    static async getUser(username: string) {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    }
}
