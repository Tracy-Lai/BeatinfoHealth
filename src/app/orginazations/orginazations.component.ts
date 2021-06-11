import { Component, OnInit } from '@angular/core';

// Breadcrumb
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { Routing } from '../_models/routing.enum';

@Component({
  selector: 'app-orginazations',
  templateUrl: './orginazations.component.html',
  styleUrls: ['./orginazations.component.scss']
})
export class OrginazationsComponent implements OnInit {

  constructor(
    private breadService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    // Breadcrumb - Orginazation
    this.breadService.changeBreadcrumb([Routing.Orginazation]);

  }

}
