import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2) 
    { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
      //setStyle receives 4 parameters:
      //  element reference
      //  attribute you want to style
      //  value of the attribute
      //  flag(optional such as #important)
      //this.renderer.setStyle(
      //  this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
    
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}

//Using renderer is a better approach because you don't always 
//have access to the DOM
