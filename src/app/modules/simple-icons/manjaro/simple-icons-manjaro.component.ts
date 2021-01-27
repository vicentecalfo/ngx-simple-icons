import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-manjaro',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Manjaro icon</title><path d="M0 0v24h6.75V6.75h8.625V0H0zm8.625 8.625V24h6.75V8.625h-6.75zM17.25 0v24H24V0h-6.75z"/></svg>`,
    styles: []
})
export class SimpleIconsManjaroComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#35BF5C';
    @Input() className: string = 'simple-icons-manjaro'
    constructor() {}
    ngOnInit(): void {}
}
