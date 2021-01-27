import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-hashnode',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Hashnode icon</title><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/></svg>`,
    styles: []
})
export class SimpleIconsHashnodeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#2962FF';
    @Input() className: string = 'simple-icons-hashnode'
    constructor() {}
    ngOnInit(): void {}
}
