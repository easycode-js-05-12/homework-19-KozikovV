import { Http } from '../core/http.service';
import { ENV } from '../config/env';

export class HomeService {
    getHomeData() {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/home`)
                .then((response) => resolve(response))
                .catch(err => reject(err));
        });
    }
}