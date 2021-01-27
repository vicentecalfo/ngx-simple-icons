import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-semanticweb',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Semantic Web icon</title><path d="M21.602 0s-1.524 5.809-8.516 2.658c-.776-.35-.954-.444-.982-.469L2.074 6.301l10.043 4.896s.776-.326 2.026-.933C20.273 7.287 21.602 0 21.602 0zM1.59 8.486v10.448L10.947 24V13.242L1.59 8.486zm20.82 0l-9.357 4.756V24l9.357-5.066V8.486Z"/></svg>`,
    styles: []
})
export class SimpleIconsSemanticwebComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#005A9C';
    @Input() className: string = 'simple-icons-semanticweb'
    constructor() {}
    ngOnInit(): void {}
}
