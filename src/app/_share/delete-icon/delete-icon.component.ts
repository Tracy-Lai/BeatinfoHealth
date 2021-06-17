import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete.svg',
  styleUrls: ['./delete-icon.component.scss']
})
export class DeleteIconComponent {
  @Input() isButton = true;
  @Input() inactive = false;
  @Input('class') customClassName = '';
  @HostBinding('class')
  get hostClasses() {
    return [
      'icon',
      this.customClassName,
      this.isButton ? 'button-icon' : '',
      this.inactive ? 'inactive-icon' : '',
    ].join(' ');
  }
}
