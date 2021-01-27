import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-magento',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Magento icon</title><path d="M12 24l-4.455-2.572v-12l2.97-1.715v12.001l1.485.902 1.485-.902V7.713l2.971 1.715v12L12 24zM22.391 6v12l-2.969 1.714V7.713L12 3.43 4.574 7.713v12.001L1.609 18V6L12 0l10.391 6z"/></svg>`,
    styles: []
})
export class SimpleIconsMagentoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EE672F';
    @Input() className: string = 'simple-icons-magento'
    constructor() {}
    ngOnInit(): void {}
}
