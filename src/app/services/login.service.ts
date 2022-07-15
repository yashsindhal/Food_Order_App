import { Injectable } from '@angular/core';
import { LoginModule } from '../shared/models/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login:LoginModule = new LoginModule();

  constructor() { }
}
