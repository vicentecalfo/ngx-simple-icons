import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-samsungpay',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Samsung Pay icon</title><path d="M23.978 10.702c-.133-3.828-1.139-6.909-3.408-8.592S14.89-.157 10.604.047C8.658.141 6.902.394 5.477.964c-1.47.59-2.606 1.421-3.437 2.578C.369 5.867-.148 9.377.035 13.422c.174 3.84 1.169 6.878 3.465 8.535 2.284 1.647 5.996 2.17 9.909 2.005 3.798-.16 6.883-1.167 8.535-3.466 1.649-2.295 2.175-5.683 2.034-9.794zM6.602 14.77h-.495v-1.063h.495c.946 0 1.636-.732 1.636-1.636 0-.903-.732-1.636-1.636-1.636H5.003a.13.13 0 0 0-.124.093v5.802h-1.03v-5.802c0-.638.517-1.155 1.155-1.155h1.599c1.49 0 2.725 1.208 2.725 2.698S8.175 14.77 6.602 14.77zm8.702.001H14.26v-2.78c-.021-.784-.853-1.565-1.739-1.565-.996 0-1.729.85-1.729 1.646 0 1.126.794 1.641 1.729 1.641h.368v1.058h-.368c-1.538-.001-2.785-.985-2.785-2.699 0-1.398 1.247-2.699 2.785-2.699 1.389 0 2.739 1.165 2.783 2.618v2.78zm1.324-5.221l1.361 2.788-.592 1.203-1.949-3.99h1.18zm1.261 6.971h-1.181l3.426-6.971h1.181l-3.426 6.971z"/></svg>`,
    styles: []
})
export class SimpleIconsSamsungpayComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1428A0';
    @Input() className: string = 'simple-icons-samsungpay'
    constructor() {}
    ngOnInit(): void {}
}
