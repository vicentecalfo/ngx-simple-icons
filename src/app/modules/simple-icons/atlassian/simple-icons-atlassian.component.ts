import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-atlassian',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Atlassian icon</title><path d="M7.12 11.084a.683.683 0 00-1.16.126L.075 22.974a.703.703 0 00.63 1.018h8.19a.678.678 0 00.63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.515 15.515 0 00-.906 15.317l3.95 7.9a.703.703 0 00.628.388h8.19a.703.703 0 00.63-1.017L12.63.38a.664.664 0 00-1.196.006z"/></svg>`,
    styles: []
})
export class SimpleIconsAtlassianComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0052CC';
    @Input() className: string = 'simple-icons-atlassian'
    constructor() {}
    ngOnInit(): void {}
}
