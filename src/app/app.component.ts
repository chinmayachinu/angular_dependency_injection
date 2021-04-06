import { Component } from '@angular/core';
import { CookieService } from './service/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dependency-injection';
  constructor(private cookieService : CookieService){}

  cookieString:string= this.cookieService.cookieReady()
}