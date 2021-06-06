import { Directive, Input, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appIconActive]'
})
export class IconActiveDirective implements OnInit, OnDestroy {
  // @Input() route: string;
  // @Input() isExact = false;
  // @HostBinding('class.white') isActive = false;
  destory$ = new Subject();

  // checkUrlMatch(url) {
  //   return this.isExact ? url === this.route : url.startsWith(this.route);
  // }

  constructor(private router: Router) {
  }

  ngOnInit() {
    // this.isActive = this.checkUrlMatch(this.router.url);
    // this.router.events.pipe(
    //   takeUntil(this.destory$),
    //   filter(p => p instanceof NavigationEnd),
    //   map((p: NavigationEnd) => this.checkUrlMatch(p.url))
    // ).subscribe(p => {
    //   this.isActive = p;
    // });
  }

  ngOnDestroy() {
    this.destory$.next();
    this.destory$.complete();
  }
}
