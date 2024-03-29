import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.svg',
  styleUrls: ['./add-icon.component.scss']
})
export class AddIconComponent {
  @Input() isButton = true;
  @Input('class') customClassName = '';
  @HostBinding('class')
  get hostClasses() {
    return [
      'icon',
      this.customClassName,
      this.isButton ? 'button-icon' : '',
    ].join(' ');
  }
}
