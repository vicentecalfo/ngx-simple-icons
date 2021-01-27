import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-microsoftazure',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft Azure icon</title><path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z"/></svg>`,
    styles: []
})
export class SimpleIconsMicrosoftazureComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0089D6';
    @Input() className: string = 'simple-icons-microsoftazure'
    constructor() {}
    ngOnInit(): void {}
}
