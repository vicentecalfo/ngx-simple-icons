import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-1password',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>1Password icon</title><path d="M10.51,10.013V7.299c0-0.306,0.248-0.554,0.554-0.554h1.911c0.306,0,0.554,0.248,0.554,0.554v4.968 c0,0.076-0.038,0.134-0.076,0.191l-0.478,0.478c-0.115,0.115-0.115,0.287,0,0.382l0.478,0.478c0.057,0.057,0.076,0.115,0.076,0.191 v2.713c0,0.306-0.248,0.554-0.554,0.554h-1.911c-0.306,0-0.554-0.248-0.554-0.554v-4.968c0-0.076,0.038-0.134,0.076-0.191 l0.478-0.478c0.115-0.115,0.115-0.287,0-0.382l-0.478-0.478C10.529,10.146,10.51,10.089,10.51,10.013z M19.127,12 c0-3.936-3.191-7.127-7.127-7.127S4.873,8.064,4.873,12S8.064,19.127,12,19.127S19.127,15.936,19.127,12z M21.382,12 c0,5.178-4.204,9.363-9.363,9.363c-5.178,0-9.363-4.204-9.363-9.363c0-5.178,4.204-9.363,9.363-9.363 C17.178,2.637,21.382,6.822,21.382,12z M0.764,12c0,6.21,5.025,11.236,11.236,11.236S23.236,18.21,23.236,12S18.21,0.764,12,0.764 S0.764,5.79,0.764,12z M0,12C0,5.369,5.369,0,12,0c6.631,0,12,5.369,12,12s-5.369,12-12,12S0,18.631,0,12z"/></svg>`,
    styles: []
})
export class SimpleIcons1passwordComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0094F5';
    @Input() className: string = 'simple-icons-1password'
    constructor() {}
    ngOnInit(): void {}
}