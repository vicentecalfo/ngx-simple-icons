import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-googledrive',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Drive icon</title><path d="M4.433 22.396l4-6.929H24l-4 6.929H4.433zm3.566-6.929l-3.998 6.929L0 15.467 7.785 1.98l3.999 6.931-3.785 6.556zm15.784-.375h-7.999L7.999 1.605h8.002l7.785 13.486h-.003z"/></svg>`,
    styles: []
})
export class SimpleIconsGoogledriveComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4285F4';
    @Input() className: string = 'simple-icons-googledrive'
    constructor() {}
    ngOnInit(): void {}
}
