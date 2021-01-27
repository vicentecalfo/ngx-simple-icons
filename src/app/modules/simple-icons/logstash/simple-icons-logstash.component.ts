import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-logstash',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Logstash icon</title><path d="M13.745 24h8.291v-9.164h-8.29zm-2.618 0h.437v-9.164h-9.6A9.163 9.163 0 0011.127 24m.438-9.164h-9.6V0h.873a8.727 8.727 0 018.727 8.727z"/></svg>`,
    styles: []
})
export class SimpleIconsLogstashComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#005571';
    @Input() className: string = 'simple-icons-logstash'
    constructor() {}
    ngOnInit(): void {}
}