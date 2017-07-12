import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class StoreService {

    API_URL: string = 'http://localhost:8080/api';
    message: string;
    constructor(private authHttp: AuthHttp) { }
    public listItems() : Observable<any> {       
        return this.authHttp.get(this.API_URL+'/store')
            .map(res => res.json());
            
    }
}
