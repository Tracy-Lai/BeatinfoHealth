import { Component, OnInit, Input } from '@angular/core';

import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadList$ = this.service.breadcrumb$;

  constructor(private service: BreadcrumbService) { }

  ngOnInit(): void {
  }

}
