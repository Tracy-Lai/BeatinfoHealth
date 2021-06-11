import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { OrginazationService } from './../_services/orginazation.service';

@Injectable({
  providedIn: 'root'
})
export class OrginazationGuard implements CanActivate {

  constructor(
    private router: Router,
    private orginazationService: OrginazationService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!!this.orginazationService.getOrginazationId()) {
      return true;
    }

    this.router.navigate(['/orginazations']);
    return false;
  }
}
