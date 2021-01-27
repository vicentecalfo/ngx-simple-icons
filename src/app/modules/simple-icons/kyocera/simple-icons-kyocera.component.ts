import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-kyocera',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kyocera icon</title><path d="M9.677 4.645L2.323 12V4.645h7.354zm-7.354 14.71h7.355L2.323 12v7.355zm7.354 0L17.032 12 9.677 4.645v14.71zM21.677 0h-7.355L9.677 4.645h7.355V12l4.645-4.645V0zm-12 19.355L14.323 24h7.355v-7.355L17.032 12v7.355H9.677z"/></svg>`,
    styles: []
})
export class SimpleIconsKyoceraComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#DF0522';
    @Input() className: string = 'simple-icons-kyocera'
    constructor() {}
    ngOnInit(): void {}
}
