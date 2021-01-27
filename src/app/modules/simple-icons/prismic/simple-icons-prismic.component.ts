import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-prismic',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Prismic icon</title><path d="M7.7 0C5.033 0 4.066.278 3.09.8A5.447 5.447 0 0 0 .825 3.07c-.522.977-.8 1.947-.8 4.622v.998c0 .199.078.388.218.529l1.77 1.774a.15.15 0 0 0 .257-.106V8.019c0-2.006.208-2.733.6-3.467A4.088 4.088 0 0 1 4.568 2.85c.731-.392 1.457-.6 3.459-.6h2.164c.199 0 .39-.08.53-.221l1.77-1.772A.15.15 0 0 0 12.387 0zm7.605 0c-.2 0-.392.08-.532.22l-1.769 1.775a.147.147 0 0 0-.044.104c0 .083.068.15.15.15h2.862c2.002 0 2.728.21 3.46.601a4.089 4.089 0 0 1 1.698 1.702c.39.734.599 1.461.599 3.467v2.17c0 .198.078.39.218.53l1.77 1.774a.15.15 0 0 0 .257-.106V7.692c0-2.675-.278-3.645-.8-4.623A5.446 5.446 0 0 0 20.91.801C19.935.278 18.968 0 16.3 0zM6.761 3.75a2.995 2.995 0 0 0-2.993 2.999v5.691a.75.75 0 0 0 .219.529l1.77 1.776a.149.149 0 0 0 .255-.106v-7.14a1.5 1.5 0 0 1 .097-.53c.072-.2.188-.385.348-.545l2.308-2.421a.15.15 0 0 0-.11-.253zm4.802 0c-.2 0-.39.08-.53.22L9.26 5.744A.151.151 0 0 0 9.366 6h7.124c.186 0 .364.034.528.097.2.072.386.188.546.347l2.413 2.313a.15.15 0 0 0 .255-.108v-1.9a2.995 2.995 0 0 0-2.993-3zm6.573 5.463a.15.15 0 0 0-.15.15v7.139a1.5 1.5 0 0 1-.095.53 1.49 1.49 0 0 1-.348.546l-2.308 2.42a.15.15 0 0 0 .108.255h1.896a2.997 2.997 0 0 0 2.993-3.002v-5.69a.752.752 0 0 0-.219-.53l-1.77-1.774a.15.15 0 0 0-.107-.044zm-17.96 2.25a.15.15 0 0 0-.15.15v4.695c0 2.674.278 3.645.8 4.623a5.442 5.442 0 0 0 2.263 2.267c.976.522 1.943.802 4.612.802h.994c.2 0 .39-.08.53-.22l1.771-1.775a.149.149 0 0 0-.106-.255H8.027c-2.002 0-2.728-.208-3.46-.6a4.088 4.088 0 0 1-1.698-1.702c-.39-.734-.599-1.461-.599-3.467v-2.172a.749.749 0 0 0-.22-.528L.282 11.507a.15.15 0 0 0-.106-.044zm21.703 1.5a.15.15 0 0 0-.15.15v2.868c0 2.006-.208 2.733-.6 3.467a4.088 4.088 0 0 1-1.698 1.702c-.731.392-1.457.6-3.459.6h-2.164a.749.749 0 0 0-.532.22l-1.769 1.773a.151.151 0 0 0-.043.107c0 .083.065.15.148.15H16.3c2.67 0 3.636-.28 4.612-.802a5.442 5.442 0 0 0 2.263-2.267c.522-.978.8-1.948.8-4.623v-.998a.749.749 0 0 0-.22-.529l-1.769-1.774a.15.15 0 0 0-.106-.044zm-17.96 2.238a.15.15 0 0 0-.151.15v1.898a2.997 2.997 0 0 0 2.993 3.001h5.676c.2 0 .39-.08.53-.22l1.773-1.775a.146.146 0 0 0 .044-.104.15.15 0 0 0-.15-.15H7.51a1.48 1.48 0 0 1-.53-.098 1.49 1.49 0 0 1-.546-.347l-2.413-2.313a.147.147 0 0 0-.103-.042z"/></svg>`,
    styles: []
})
export class SimpleIconsPrismicComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#5163BA';
    @Input() className: string = 'simple-icons-prismic'
    constructor() {}
    ngOnInit(): void {}
}
