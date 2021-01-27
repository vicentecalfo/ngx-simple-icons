import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-cakephp',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CakePHP icon</title><path d="M0 13.875v3.745c0 2.067 5.37 3.743 12 3.743V17.62c-6.63 0-12-1.68-12-3.743v-.002zm21.384 2.333L12 13.875v3.745l9.384 2.333C23.02 19.313 24 18.503 24 17.62v-3.745c0 .882-.98 1.692-2.616 2.333zM12 10.133v3.742c-6.627 0-12-1.677-12-3.744V6.38c0-2.064 5.37-3.743 12-3.743 6.625 0 12 1.68 12 3.744v3.75c0 .883-.98 1.69-2.616 2.334L12 10.13v.003z"/></svg>`,
    styles: []
})
export class SimpleIconsCakephpComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#D33C43';
    @Input() className: string = 'simple-icons-cakephp'
    constructor() {}
    ngOnInit(): void {}
}
