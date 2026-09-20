import { Injectable,signal  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  private readonly mockEmail = 'auditor@audit.com';
  private readonly mockPassword = 'Audit@123';
  private isAuthenticated = signal(false);

  login(email:string , password :string):boolean{
   const isValidCredentials = email ===this.mockEmail &&
   password === this.mockPassword;

   if(isValidCredentials){
    this.isAuthenticated.set(true);
    return true;
   }

   return false;
  }

    logout(): void {
   this.isAuthenticated.set(false);
  }

   isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

}
