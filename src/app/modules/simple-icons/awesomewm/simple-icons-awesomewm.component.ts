import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-awesomewm',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>awesomeWM icon</title><path d="M0 24V8.25h16.5V7.5H0V0h24v24h-7.5v-8.25h-9v.75h8.25V24z"/></svg>`,
    styles: []
})
export class SimpleIconsAwesomewmComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#535D6C';
    @Input() className: string = 'simple-icons-awesomewm'
    constructor() {}
    ngOnInit(): void {}
}
