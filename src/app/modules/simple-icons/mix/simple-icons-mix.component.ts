import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-mix',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mix icon</title><path d="M.001 0v21.61c0 1.32 1.074 2.39 2.4 2.39a2.396 2.396 0 0 0 2.402-2.39V8.54c0 .014-.005.026-.006.04V6.364a2.395 2.395 0 0 1 2.399-2.393 2.396 2.396 0 0 1 2.398 2.393v9.356a2.394 2.394 0 0 0 2.398 2.393 2.394 2.394 0 0 0 2.398-2.39v-3.692a2.398 2.398 0 0 1 2.385-2.078 2.4 2.4 0 0 1 2.41 2.389v1.214a2.397 2.397 0 0 0 2.408 2.389 2.399 2.399 0 0 0 2.406-2.39V.006a4.61 4.61 0 0 0-.145-.004c-1.31 0-2.558.264-3.693.74A9.449 9.449 0 0 1 23.841 0z"/></svg>`,
    styles: []
})
export class SimpleIconsMixComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF8126';
    @Input() className: string = 'simple-icons-mix'
    constructor() {}
    ngOnInit(): void {}
}
