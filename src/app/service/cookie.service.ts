import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  cookieReady(){
    return "cookie is ready"
  }
}
