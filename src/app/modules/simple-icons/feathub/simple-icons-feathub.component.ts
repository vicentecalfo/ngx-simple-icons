import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-feathub',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>FeatHub icon</title><path d="M8.571 0v6.857h6.858V0zM0 8.571v6.858h24V8.57zm8.571 8.572V24h6.858v-6.857z"/></svg>`,
    styles: []
})
export class SimpleIconsFeathubComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#9B9B9B';
    @Input() className: string = 'simple-icons-feathub'
    constructor() {}
    ngOnInit(): void {}
}
