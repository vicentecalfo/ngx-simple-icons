import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-xilinx',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Xilinx icon</title><path d="M8 18l5.241 6H5.586L.345 18l5.241-6L.345 6l5.241-6h7.655L8 6l5.241 6L8 18zM23.655 0H13.241l5.241 6 5.173-6zM13.241 24h10.414l-5.172-6-5.242 6z"/></svg>`,
    styles: []
})
export class SimpleIconsXilinxComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E01F27';
    @Input() className: string = 'simple-icons-xilinx'
    constructor() {}
    ngOnInit(): void {}
}
