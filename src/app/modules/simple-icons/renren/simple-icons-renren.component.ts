import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-renren',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Renren icon</title><path d="M5.66 9.553V5.2542a6.7943 6.7943 0 00-4.0537 11.0861C3.9847 15.1881 5.648 12.5846 5.66 9.553zm1.1323 4.1148c-.4231 1.7523-1.6874 3.2496-3.2626 4.2448a6.7603 6.7603 0 003.2616.8332 6.7723 6.7723 0 003.2626-.8332c-1.5753-.9952-2.8386-2.4935-3.2616-4.2448zm5.185-6.1031a6.7903 6.7903 0 00-4.0528-2.3105V9.52c0 3.0446 1.6663 5.663 4.0517 6.8183a6.7673 6.7673 0 01-1.6073-4.3868 6.7553 6.7553 0 011.6083-4.3868zm0 0c1.0031 1.1832 1.6552 2.7145 1.6552 4.3878 0 1.6733-.652 3.2026-1.6553 4.3878l-.001-.001.001.001c2.3785-1.1512 4.0878-3.7557 4.0998-6.7873V5.2542a6.9013 6.9013 0 00-4.0998 2.3105zM18.3413 9.52c0 3.0456 1.6663 5.663 4.0528 6.8193a6.7933 6.7933 0 00-4.0528-11.084zm-1.1322 4.1478c-.423 1.7523-1.6873 3.2496-3.2626 4.2448a6.7603 6.7603 0 003.2616.8332 6.7723 6.7723 0 003.2626-.8332c-1.5743-.9952-2.8385-2.4935-3.2616-4.2448z"/></svg>`,
    styles: []
})
export class SimpleIconsRenrenComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#217DC6';
    @Input() className: string = 'simple-icons-renren'
    constructor() {}
    ngOnInit(): void {}
}
