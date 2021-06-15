import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { OrganizationService } from '../_services/organization.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationGuard implements CanActivate {

  constructor(
    private router: Router,
    private organizationService: OrganizationService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!!this.organizationService.getOrganizationId()) {
      return true;
    }

    this.router.navigate(['/organizations']);
    return false;
  }
}
