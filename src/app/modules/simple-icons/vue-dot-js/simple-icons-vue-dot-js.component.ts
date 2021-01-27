import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-vue-dot-js',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js icon</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>`,
    styles: []
})
export class SimpleIconsVueDotJsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4FC08D';
    @Input() className: string = 'simple-icons-vue-dot-js'
    constructor() {}
    ngOnInit(): void {}
}
