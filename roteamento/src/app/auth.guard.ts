import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state
  ) => {
  //constructor(auth: AuthService){}

  return false;
};
