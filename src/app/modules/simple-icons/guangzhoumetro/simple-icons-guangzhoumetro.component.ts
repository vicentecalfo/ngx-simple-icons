import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-guangzhoumetro',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Guangzhou Metro icon</title><path d="M16.433 12.329A16.188 16.188 0 0 1 22.118.009L17.684 0a16.2 16.2 0 0 0-4.776 11.374V24h3.525zm-8.869 0A16.174 16.174 0 0 0 1.882.009L6.319 0a16.238 16.238 0 0 1 4.773 11.374V24H7.564zm0 0Z"/></svg>`,
    styles: []
})
export class SimpleIconsGuangzhoumetroComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#C51935';
    @Input() className: string = 'simple-icons-guangzhoumetro'
    constructor() {}
    ngOnInit(): void {}
}