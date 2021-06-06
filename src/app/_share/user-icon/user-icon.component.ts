import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user.svg',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent {
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
