import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-libreoffice',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>LibreOffice icon</title><path d="M16.365 0a.597.597 0 00-.555.352.582.582 0 00.128.635l4.985 4.996a.605.605 0 00.635.133.59.59 0 00.363-.53V.577A.605.605 0 0021.335 0zM2.661 0a.59.59 0 00-.582.59v22.82a.59.59 0 00.582.59h18.67a.59.59 0 00.59-.59V8.716a.59.59 0 00-.17-.42L13.674.182a.59.59 0 00-.42-.181zm.59 1.184h9.754l7.733 7.77v13.863H3.251z"/></svg>`,
    styles: []
})
export class SimpleIconsLibreofficeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#18A303';
    @Input() className: string = 'simple-icons-libreoffice'
    constructor() {}
    ngOnInit(): void {}
}
