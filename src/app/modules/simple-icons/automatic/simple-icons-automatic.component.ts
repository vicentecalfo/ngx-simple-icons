import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-automatic',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Automatic icon</title><path d="M12 6.768v.002-1.237c-.485.033-.754.293-.99.71L5.87 16.72h2.464l-.753-.96.654-1.363.005.007L12 6.774v-.006zM10.526 13.123h2.946L12 10.076M8.233 14.416h.017l-.01-.013M13.473 13.123v.002M21.496 5.066L13.26.308c-.693-.4-1.827-.4-2.52 0L2.504 5.066c-.693.398-1.26 1.38-1.26 2.182v9.507c0 .802.567 1.782 1.26 2.18l8.236 4.757c.693.4 1.826.4 2.52 0l8.235-4.768c.692-.39 1.26-1.38 1.26-2.174V7.246c0-.8-.567-1.78-1.26-2.18zm-6.066 12.05l-.687-1.384h-5.5l-.673 1.384H5.287l5.396-11.033c.305-.607.777-.9 1.317-.9s1.034.328 1.316.89l5.396 11.043H15.43zM12 6.77V9.244l2.518 5.173H8.25l.758.94h5.972l.674 1.35h2.474l-1.708-.99v.04L12 6.77"/></svg>`,
    styles: []
})
export class SimpleIconsAutomaticComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7D8084';
    @Input() className: string = 'simple-icons-automatic'
    constructor() {}
    ngOnInit(): void {}
}
