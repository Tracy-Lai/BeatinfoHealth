import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home-icon',
  templateUrl: './home.svg',
  styleUrls: ['./home-icon.component.scss']
})
export class HomeIconComponent {
  @Input() isActive = false;
  @Input('class') customClassName = '';
  @HostBinding('class')
  get hostClasses() {
    return [
      'icon',
      this.customClassName,
      this.isActive ? 'white' : '',
    ].join(' ');
  }
}
