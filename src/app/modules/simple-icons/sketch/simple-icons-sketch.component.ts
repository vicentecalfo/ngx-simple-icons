import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-sketch',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Sketch icon</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>`,
    styles: []
})
export class SimpleIconsSketchComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F7B500';
    @Input() className: string = 'simple-icons-sketch'
    constructor() {}
    ngOnInit(): void {}
}
