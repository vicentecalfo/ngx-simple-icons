import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-nounproject',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Noun Project icon</title><path d="M17.672 8.846H24v6.327h-6.328zM6.328 11.99a3.164 3.164 0 0 1-3.164 3.163A3.164 3.164 0 0 1 0 11.991a3.164 3.164 0 0 1 3.164-3.164 3.164 3.164 0 0 1 3.164 3.164m5.504 1.142l2.04 2.021 1.142-1.16-2.022-2.003 2.022-2.003-1.142-1.142-2.04 2.003L9.81 8.846 8.649 9.988l2.022 2.003-2.022 2.003 1.16 1.16Z"/></svg>`,
    styles: []
})
export class SimpleIconsNounprojectComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-nounproject'
    constructor() {}
    ngOnInit(): void {}
}
