import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx"

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(){
    return this.http.get("https://tienda-ead4d.firebaseio.com/usuario/.json")
      .map((res: Response) => res.json());
  }
}
