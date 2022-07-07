import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    dropDownClicked : boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
    
    }

    @HostListener('click') onClick(eventData: Event) {
        this.dropDownClicked = !this.dropDownClicked;
        if (this.dropDownClicked == true) {
            this.renderer.addClass(this.elRef.nativeElement, 'open');
        } else {
            this.renderer.removeClass(this.elRef.nativeElement, 'open');
        }
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }
}