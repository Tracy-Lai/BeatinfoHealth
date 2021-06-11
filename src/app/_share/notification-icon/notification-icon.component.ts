import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-notification-icon',
  templateUrl: './notification.svg',
  styleUrls: ['./notification-icon.component.scss']
})
export class NotificationIconComponent {
  @Input() isActive = true;
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
