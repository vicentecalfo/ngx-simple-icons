import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-googleplay',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Play icon</title><path d="M1.22 0c-.03.093-.06.185-.06.308v23.229c0 .217.061.34.184.463l11.415-12.093L1.22 0zm12.309 12.708l2.951 3.045-4.213 2.4s-5.355 3.044-8.308 4.739l9.57-10.184zm.801-.831l3.166 3.292c.496-.276 4.371-2.492 4.924-2.8.584-.338.525-.8.029-1.046-.459-.255-4.334-2.475-4.92-2.835l-3.203 3.392.004-.003zm-.803-.8l2.984-3.169-4.259-2.431S5.309 1.505 2.999.179l10.53 10.898h-.002z"/></svg>`,
    styles: []
})
export class SimpleIconsGoogleplayComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#414141';
    @Input() className: string = 'simple-icons-googleplay'
    constructor() {}
    ngOnInit(): void {}
}
