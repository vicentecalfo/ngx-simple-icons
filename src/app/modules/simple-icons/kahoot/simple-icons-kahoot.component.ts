import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-kahoot',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kahoot! icon</title><path d="M20.557 18.87l2.747-17.513L16.174 0zM.696 2.348v19.078l4.035.14-.035-6.679 2.487-2.4 2.626 9.078h3.565L10.087 9.722l4.957-5.444-3.496-1.339L4.73 9.443V1.322zm18.295 17.86l-.99 2.331L20.12 24l2.088-1.235-.887-2.556Z"/></svg>`,
    styles: []
})
export class SimpleIconsKahootComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#46178F';
    @Input() className: string = 'simple-icons-kahoot'
    constructor() {}
    ngOnInit(): void {}
}
