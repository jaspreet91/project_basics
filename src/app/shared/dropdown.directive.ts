import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
  this.isOpen = true;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.isOpen = false;
  }
  constructor() { }

}
