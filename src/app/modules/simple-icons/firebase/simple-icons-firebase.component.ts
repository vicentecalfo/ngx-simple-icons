import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-firebase',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Firebase icon</title><path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/></svg>`,
    styles: []
})
export class SimpleIconsFirebaseComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FFCA28';
    @Input() className: string = 'simple-icons-firebase'
    constructor() {}
    ngOnInit(): void {}
}
