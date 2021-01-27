import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-ghost',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ghost icon</title><path d="M9.604 19.199H.008V24h9.597v-4.801zm14.39 0h-9.591V24h9.591v-4.801zm.003-9.599H0v4.8h23.997V9.6zM24 0h-4.801v4.801H24V0zm-9.596 0H.008v4.801h14.396V0z"/></svg>`,
    styles: []
})
export class SimpleIconsGhostComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#738A94';
    @Input() className: string = 'simple-icons-ghost'
    constructor() {}
    ngOnInit(): void {}
}