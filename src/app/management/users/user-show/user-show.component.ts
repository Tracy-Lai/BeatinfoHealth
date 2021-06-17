import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BreadcrumbService } from 'src/app/_services/breadcrumb.service';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private breadService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Mangement');

    this.route.params.subscribe(param => {
      console.log(param.userId)
    });

  }

}
