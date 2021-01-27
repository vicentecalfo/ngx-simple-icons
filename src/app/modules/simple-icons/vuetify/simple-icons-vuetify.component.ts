import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-vuetify',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vuetify icon</title><path d="M7.094 0L12 11.596 16.906 0H7.094zM1.5 3.5L12 24 22.5 3.5H17L12 15 7 3.5z"/></svg>`,
    styles: []
})
export class SimpleIconsVuetifyComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1867C0';
    @Input() className: string = 'simple-icons-vuetify'
    constructor() {}
    ngOnInit(): void {}
}
