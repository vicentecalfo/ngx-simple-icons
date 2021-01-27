import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-awsamplify',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>AWS Amplify icon</title><path d="M5.223 17.905h6.76l1.731 3.047H0l4.815-8.344 2.018-3.494 1.733 3.002zm2.52-10.371L9.408 4.65l9.415 16.301h-3.334zm2.59-4.486h3.33L24 20.952h-3.334z"/></svg>`,
    styles: []
})
export class SimpleIconsAwsamplifyComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF9900';
    @Input() className: string = 'simple-icons-awsamplify'
    constructor() {}
    ngOnInit(): void {}
}
