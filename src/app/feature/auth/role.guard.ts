import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { UserRole } from './auth.model';

export const roleGuard: CanActivateFn = (route) => {
 
  const authservice = inject(AuthService)
  const router = inject(Router);
  const userRole = authservice.getUserRole()


   const allowedRoles = route.data['roles'] as UserRole[];

  if (userRole && allowedRoles.includes(userRole)) {
    return true;
  }

  return router.createUrlTree(['/dashboard']);
};
