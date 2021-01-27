import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-bandsintown',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Bandsintown icon</title><path d="M18.783 0H24v12h-5.217V0zm-6.261 5h5.217v7h-5.217V5zM6.26 5h5.217v7H6.261V5zM24 24H0V0h5.217v19h13.566v-1H6.26v-5H24v11Z"/></svg>`,
    styles: []
})
export class SimpleIconsBandsintownComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00CEC8';
    @Input() className: string = 'simple-icons-bandsintown'
    constructor() {}
    ngOnInit(): void {}
}
