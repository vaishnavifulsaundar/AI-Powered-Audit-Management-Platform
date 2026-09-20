import { Injectable,signal  } from '@angular/core';
import { UserRole } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  private readonly mockEmail = 'auditor@audit.com';
  private readonly mockPassword = 'Audit@123';
  private isAuthenticated = signal(false);
  private userRole = signal<UserRole | null>(null);

  login(email:string , password :string):boolean{
   const isValidCredentials = email ===this.mockEmail &&
   password === this.mockPassword;

   if(isValidCredentials){
    this.isAuthenticated.set(true);
    this.userRole.set('Auditor');
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

  getUserRole():UserRole | null{
    return this.userRole();

  }

}
