import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-opencontainersinitiative',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Open Containers Initiative icon</title><path d="M0 0v24h24V0zm20.547 20.431H3.448V3.573h17.104V20.43zm-5.155-9.979h3.436v8.255h-3.436zm0-5.16h3.436v3.436h-3.436zm-6.789 9.976V8.732h5.074v-3.44H5.164v13.415h8.513v-3.44Z"/></svg>`,
    styles: []
})
export class SimpleIconsOpencontainersinitiativeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#262261';
    @Input() className: string = 'simple-icons-opencontainersinitiative'
    constructor() {}
    ngOnInit(): void {}
}
