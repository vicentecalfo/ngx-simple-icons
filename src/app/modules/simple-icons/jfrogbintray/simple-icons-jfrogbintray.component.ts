import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-jfrogbintray',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JFrog Bintray icon</title><path d="M2.617 22.316h18.766V24H2.617zm15.88-12.632l-5.655 5.655V3.249l1.744 1.743L15.79 3.79 12 0 8.21 3.79l1.204 1.203 1.744-1.804v12.15L5.504 9.686H7.97V8H2.617v5.354H4.3v-2.527L12 18.526l7.698-7.699v2.527h1.685V8H16.03v1.684z"/></svg>`,
    styles: []
})
export class SimpleIconsJfrogbintrayComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#43A047';
    @Input() className: string = 'simple-icons-jfrogbintray'
    constructor() {}
    ngOnInit(): void {}
}
