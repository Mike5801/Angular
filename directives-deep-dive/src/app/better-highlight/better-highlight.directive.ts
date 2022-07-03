import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2) 
    { }

  ngOnInit(): void {
      //setStyle receives 4 parameters:
      //  element reference
      //  attribute you want to style
      //  value of the attribute
      //  flag(optional such as #important)
      this.renderer.setStyle(
        this.elRef.nativeElement, 'background-color', 'blue');
  }
}

//Using renderer is a better approach because you don't always 
//have access to the DOM
