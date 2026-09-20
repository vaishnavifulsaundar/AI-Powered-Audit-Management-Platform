import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


    private readonly mockEmail = 'auditor@audit.com';
  private readonly mockPassword = 'Audit@123';

  login(email:string , password :string):boolean{
   return (
  email === this.mockEmail &&
  password === this.mockPassword
   )
  }

    logout(): void {
    console.log('User logged out');
  }
  
}
