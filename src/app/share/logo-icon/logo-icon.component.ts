import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo.svg',
  styleUrls: ['./logo-icon.component.scss']
})
export class LogoIconComponent {
  @Input() isWhite = true;
  @Input('class') customClassName = '';
  @HostBinding('class')
  get hostClasses() {
    return [
      'icon',
      this.customClassName,
      this.isWhite ? 'white' : '',
    ].join(' ');
  }
}
