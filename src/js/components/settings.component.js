import { SettingService } from '../services/setting.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';


export class SettingsComponent {
    constructor() {
        this._userService = new UserService();
        this._authService = new AuthService();
        this._settingService = new SettingService();

        this._countries = null;
        this._userCountry = null;
        this._cities = null;
        this._user = null;
        this._form = null;
    }

    async beforeRender() {
      this._user = await this._userService.getUser(this._authService.userId);
      this._countries = await this._settingService.getCountries();
    }
    render() {
        return `
        <style>
        ${this.style()}
        </style>
        <div class="container">
        <form name="main">
            <h1 class="text-center">ACCOUNT SETTINGS</h1>
            <div class="row mb-4">
                
                <div class="col-6">
                    <article>
                        <h3>PERSONAL DATA</h3>
                        <div class="input-group mb-3">
                            <div class="row">
                                <div class="col-4">
                                    <input type="text" class="form-control" name="first_name">
                                </div>
                                <div class="col-8">
                                    <input type="text" class="form-control" name="last_name">
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="row">
                                <div class="col-4">
                                    <input type="text" class="form-control" name="nickname">
                                </div>
                                <div class="col-8">
                                    <input type="text" class="form-control" placeholder="Paypal ID">
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" name="phone">
                                </div>
                            </div>
                        </div>
                        <h6 class="mb-3">Date of Birth</h6>
                        <div class="input-group mb-3">
                            <div class="row">
                                <div class="col-4">
                                    <select class="custom-select" name="date_of_birth_day">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <select class="custom-select" name="date_of_birth_month">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>    
                                </div>
                                <div class="col-4">
                                    <select class="custom-select" name="date_of_birth_year">
                                    </select>
                                </div>
                            </div> 
                        </div>
                        <div class="input-group mb-3">
                            <div class="row">
                                <div class="col-6">
                                    <select class="custom-select" name="country">
                                    </select>
                                </div>
                                <div class="col-6">
                                    <select class="custom-select" name="city">    
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-5">
                            <div class="row">
                                <div class="col">
                                    <select class="custom-select" name="gender_orientation">
                                        <option value="male" selected>Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <h6 class="mb-3">Сhange account photo</h6>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                            <p>Warning! Maximum photo size is 2.5 MB. Please only upload your own photo! Inappropriate photos will be removed.</p>
                        </div>
                        <h6 class="mb-3">Сhange email address</h6>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control" name="email" aria-label="Username" aria-describedby="basic-addon1" disabled>
                        </div>
                        <button type="button" class="btn btn-border-gradient btn-bg-light mb-3"><span class="btn-wrapper">Save</span></button>
                    </article>
                </div>
                
                <div class="col-6">
                    <div class="row right">
                        <div class="col-12 mb-4">
                            <article>
                                <h3>EMAIL SETTINGS</h3>
                                <div class="row mb-4">
                                    <div class="col-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="newChallenge" name="email_on_every_challenge">
                                            <label class="custom-control-label" for="newChallenge">Every New Challenge</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="onceWeek" name="email_on_new_challenges_once_week">
                                            <label class="custom-control-label" for="onceWeek">New Challenge - Once Week</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="comments" name="email_on_comments">
                                            <label class="custom-control-label" for="comments">Comments</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="weeklyArticles" name="email_weekly_articles">
                                            <label class="custom-control-label" for="weeklyArticles">Weekly Articles</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="likes" name="email_on_likes">
                                            <label class="custom-control-label" for="likes">Likes</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="commentsReply" name="email_on_comments_reply">
                                            <label class="custom-control-label" for="commentsReply">Comments Reply</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="newFollowers" name="email_on_new_followers">
                                            <label class="custom-control-label" for="newFollowers">New Followers</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-border-gradient btn-bg-light mb-3"><span class="btn-wrapper">Save</span></button>
                            </article> 
                        </div>
                        <div class="col-12 mb-4">
                            <article>
                                <h3>CHANGE PASSWORD</h3>
                                    <div class="input-group mb-3">
                                        <div class="row">
                                            <div class="col-12 mb-3">
                                                <input type="password" class="form-control" placeholder="Old password">
                                            </div>
                                            <div class="col-6">
                                                <input type="password" class="form-control" placeholder="New password">
                                            </div>
                                            <div class="col-6">
                                                <input type="password" class="form-control" placeholder="Repeate password">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-border-gradient btn-bg-light mb-3"><span class="btn-wrapper">Save</span></button>
                            </article>
                        </div> 
                        <div class="col-12 mb-4">
                            <article class="deactivate">
                                <h3 class="mb-4">CHANGE PASSWORD</h3>
                                <button type="button" class="btn btn-link">Deactivate account</button>
                            </article>
                        </div>    
                    </div>
                </div>
            </div>
            </form>
        </div>
        `;
    }

    style() {
        return `
        article {
            background-color: #fff;
            padding: 10px;
        }
        
        body {
            background-color: #e3dfdf;
        }
        
        .row {
            width: 100%;
        }
        
        .btn {
            position: relative;
            display: inline-block;
            padding: 15px 35px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            border-radius: 500px;
            z-index: 0;
            overflow: hidden;
            color: #ec38bc 76%;
        }
        
        .btn.btn-border-gradient.btn-bg-light {
            background: linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%);
            background-clip: text;
            -webkit-text-fill-color: #ec38bc 76%;
        }
        
        .btn.btn-border-gradient.btn-bg-light::after {
            background: linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,.4) 50%,rgba(255,255,255,0) 100%);
        }
        
        .btn.btn-border-gradient {
            color: #ec38bc 76%;
            background: linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%);
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            border-radius: 500px;
            z-index: -1;
            opacity: 1;
        }
        
        .btn.btn-border-gradient.btn-bg-light::before {
            background-color: #fff;
        }
        
        .container{
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .custom-control-label {
            font-size: 14px;
        }
        
        .deactivate {
            padding: 25px;
            height: 100%;
        }
        
        .right {
            height: 100%;
        }
        `;
    }

    afterRender() {
        this._form = document.forms['main'];
        this._yearSelect(this._form['date_of_birth_year']);
        this._countrySelect(this._form['country'], this._countries);
        this._citySelect(this._userCountry, this._form['city'])
        this._formSetValue(this._form);
        this._form['country'].addEventListener('change', (e) => this._countrySelectChange(this._form['city'], this._form['country'].value));
    }

    _formSetValue(form) {
        form['first_name'].value = this._user.first_name;
        form['last_name'].value = this._user.last_name;
        form['nickname'].value = this._user.nickname;
        form['phone'].value = this._user.phone;
        form['date_of_birth_day'].value = + this._user.date_of_birth_day;
        form['date_of_birth_month'].value = + this._user.date_of_birth_month;
        form['date_of_birth_year'].value = this._user.date_of_birth_year;
        form['country'].value = this._userCountry;
        form['gender_orientation'].value = this._user.gender_orientation;
        form['email'].value = this._user.email;
        form['email_on_every_challenge'].checked = this._user.email_on_every_challenge;
        form['email_on_new_challenges_once_week'].checked = this._user.email_on_new_challenges_once_week;
        form['email_on_comments'].checked = this._user.email_on_comments;
        form['email_on_likes'].checked = this._user.email_on_likes;
        form['email_on_comments_reply'].checked = this._user.email_on_comments_reply;
        form['email_weekly_articles'].checked = this._user.email_weekly_articles;
        form['email_on_new_followers'].checked = this._user.email_on_new_followers;
    }

    _yearSelect(select){
        for(let i = 2018; i >= 1900; i--) {
            select.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`);
        }
    }

    _countrySelect(select, countries) {
        for(let country in countries) {
            if(this._user.country === countries[country]) {
                this._userCountry = country;
            }
            select.insertAdjacentHTML('beforeend', `<option value="${country}">${countries[country]}</option>`);
        }
    }

    async _citySelect(countryID, select){
        this._cities = await this._settingService.getCities(countryID);
        for(let city in this._cities) {
            select.insertAdjacentHTML('beforeend', `<option value="${city}">${this._cities[city]}</option>`);
            if(this._user.city === this._cities[city]) select.value = city;
        }
    }

    async _countrySelectChange(select, countryId) {
        this._cities = await this._settingService.getCities(countryId);
        select.innerHTML = '';
        for(let city in this._cities) {
            select.insertAdjacentHTML('beforeend', `<option value="${city}">${this._cities[city]}</option>`);
        }
    }
}