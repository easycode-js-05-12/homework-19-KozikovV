import { Http } from '../core/http.service';
import { ENV } from '../config/env';
import { AuthService } from '../services/auth.service';

export class NewsService {
    getNews() {
        const http = new Http();
        const token = new AuthService();
        return new Promise((resolve, reject) => {
            http.getNews(`${ENV.apiUrl}/public/news`, token.token)
            .then((response) => resolve(response.news))
            .catch((error) => reject(error));
        });
    }
}