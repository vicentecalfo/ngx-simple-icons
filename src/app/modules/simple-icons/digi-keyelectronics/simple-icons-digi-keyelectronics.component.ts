import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-digi-keyelectronics',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Digi-Key Electronics icon</title><path d="M12.246.221A11.786 11.786 0 0 1 23.89 10.418c.912 6.593-3.944 12.711-10.558 13.297-.454.04-.912.063-1.369.064l-10.705.003v-3.749H0V3.987h1.222V.218l11.024.003zM17.9 19.423l-8.26-7.422 8.25-7.422h-6.938L5.615 9.361V4.598H.56v14.803h5.105v-4.724l5.289 4.746H17.9z"/></svg>`,
    styles: []
})
export class SimpleIconsDigiKeyelectronicsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#CC0000';
    @Input() className: string = 'simple-icons-digi-keyelectronics'
    constructor() {}
    ngOnInit(): void {}
}
