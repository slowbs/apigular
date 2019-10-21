import { Directive, OnInit, ElementRef } from '@angular/core';
declare const $:any;

@Directive({
  //selector: '[appTooltip]'
  selector: '[data-toggle="tooltip"]'
})
export class TooltipDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){ 
    //console.log(this.elementRef.nativeElement);
    $(this.elementRef.nativeElement).tooltip();
  }

}
