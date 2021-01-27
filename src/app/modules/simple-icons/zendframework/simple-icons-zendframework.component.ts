import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-zendframework',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Zend Framework icon</title><path d="M.932 6.242v2.535h5.652L0 17.757h10.219v-2.534h-5.18l6.553-8.98H.932zm13.537.162c-3.178 0-3.178 3.178-3.178 3.178h9.531C24 9.582 24 6.404 24 6.404h-9.531zm-.006 4.067c-3.173 0-3.172 3.172-3.172 3.172l4.762.005c3.178 0 3.177-3.177 3.177-3.177h-4.767zm0 4.049c-3.173 0-3.172 3.183-3.172 3.183l1.584-.006c3.178 0 3.178-3.177 3.178-3.177h-1.59Z"/></svg>`,
    styles: []
})
export class SimpleIconsZendframeworkComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#68B604';
    @Input() className: string = 'simple-icons-zendframework'
    constructor() {}
    ngOnInit(): void {}
}