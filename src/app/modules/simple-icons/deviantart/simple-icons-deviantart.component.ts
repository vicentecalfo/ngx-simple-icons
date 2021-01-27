import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-deviantart',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>DeviantArt icon</title><path d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.24.43V24H8.93l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.186-7.977z"/></svg>`,
    styles: []
})
export class SimpleIconsDeviantartComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#05CC47';
    @Input() className: string = 'simple-icons-deviantart'
    constructor() {}
    ngOnInit(): void {}
}
