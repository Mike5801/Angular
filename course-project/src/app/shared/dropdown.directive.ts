import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    @HostBinding('class.open') dropDownClicked : boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
    
    }

    @HostListener('document:click', ['$event']) onClick(eventData: Event) {
        this.dropDownClicked = this.elRef.nativeElement.contains(event.target) ? !this.dropDownClicked : false;
    }
}