import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-kibana',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kibana icon</title><path d="M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.755 18.755 0 0 0-7.51-11.53z"/></svg>`,
    styles: []
})
export class SimpleIconsKibanaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#005571';
    @Input() className: string = 'simple-icons-kibana'
    constructor() {}
    ngOnInit(): void {}
}
