import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const connexionGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const etat=localStorage.getItem('state');
  if(etat==="connected"){
    return true;
  }
  else{
    router.navigate(['/connexion']);
    return false;
  }
};
