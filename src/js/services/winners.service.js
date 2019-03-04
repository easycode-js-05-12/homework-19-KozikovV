import { Http } from '../core/http.service';
import { ENV } from '../config/env';

export class WinnersService {
    getWinners() {
        const http = new Http();
        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/winners?part=1&limit=15`)
                .then((response) => {
                    console.log(response.winners);
                    return resolve(response.winners);
                })
                .catch((error) => reject(error));
        })
    }  
}