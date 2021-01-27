import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-udemy',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Udemy icon</title><path d="M23.58 13.38a.66.66 0 00-.28-.14c-.6.61-1.35 1.25-2 1.68-.31.2-.7.3-.95.3-.59 0-.84-.55-.91-1.44a54.794 54.794 0 01-.17-4.83c0-2.26-.52-3.8-1.88-3.92l-.18-.01c-.83 0-1.24.43-1.77 1.52-.46.94-1.169 2.3-2.479 4.9a34.716 34.716 0 01-3.5 5.58c-.31.38-.55.64-.78.8a.8.8 0 01-.44.14c-.43 0-.75-.36-.85-1.21a5.46 5.46 0 01-.04-.69c0-1.75.66-4.6 1.8-8.78.83-3.05.48-5.129-1.34-5.129h-.03c-.41 0-.75.16-1.08.42-.33.25-.65.81-.96 1.56-.34.84-2.419 5.03-5.739 7.2-.04.809.42 1.629 1.37 1.729.85.08 1.46-.28 2.24-.81l-.16.73a31.557 31.557 0 00-.5 2.6c-.46 4.2 1.47 6.269 3.74 6.269.38 0 .76-.05 1.13-.15 2.5-.63 4.9-3.51 7.749-10.129a18.798 18.798 0 00-.01 2.02c.19 3.8 1.68 4.93 3.8 4.93 1.6 0 3.09-.83 3.85-1.87A3.7 3.7 0 0024 14.46c-.02-.49-.17-.88-.42-1.08z"/></svg>`,
    styles: []
})
export class SimpleIconsUdemyComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EC5252';
    @Input() className: string = 'simple-icons-udemy'
    constructor() {}
    ngOnInit(): void {}
}
