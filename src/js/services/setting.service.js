import { AuthService } from '../services/auth.service';
import { Http } from '../core/http.service';
import { ENV } from '../config/env';


export class SettingService {
    
    constructor() {
        this._http = new Http();
        this._authService = new AuthService();
    }
    
    getCountries() {
        return new Promise((resolve, reject) => {
            this._http.get(`${ENV.apiUrl}/public/location/get-countries`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        })
    }

    getCities(id) {
        return new Promise((resolve, reject) => {
            this._http.get(`${ENV.apiUrl}/public/location/get-cities/${id}`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        })
    }
}