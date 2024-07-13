import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  el:ElementRef

  //constructor catchs the element in el
  constructor(el:ElementRef) { 
    this.el = el
  }
//the change the host property
//directives increases the code reusability
  @HostBinding("style.backgroundColor") bgColor = "yellow";

  @HostListener("mouseenter") addBorderRadius(){
    this.el.nativeElement.style.borderRadius = "25px"
    this.el.nativeElement.innerHTML = "Press me!"
  }

  @HostListener("mouseleave") removeBorderRadius(){
    this.el.nativeElement.style.borderRadius = "0px"
    this.el.nativeElement.innerText= "help"
  }
}
