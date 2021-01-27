import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-lg',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>LG icon</title><path d="M5.286 6.714a5.286 5.286 0 100 10.572 5.287 5.287 0 000-10.572zm0 .86c.05 0 .156 0 .21.002v.413a14.622 14.621 0 00-.21-.003A3.986 3.986 0 002.45 9.161a3.982 3.982 0 00-1.175 2.836c0 1.072.417 2.08 1.175 2.836a3.986 3.986 0 002.836 1.175 4.02 4.019 0 004.003-3.741v-.06H6.551v-.41h2.981l.177-.001v.201a4.394 4.394 0 01-1.294 3.128 4.4 4.4 0 01-3.13 1.296c-1.18 0-2.29-.46-3.13-1.296a4.394 4.394 0 01-1.293-3.128 4.43 4.43 0 014.424-4.425zm16.063.878c-2.21 0-3.372 1.207-3.372 3.508 0 2.29 1.05 3.53 3.36 3.53 1.06 0 2.099-.27 2.663-.665v-3.316h-2.74v1.274h1.285v1.195c-.237.09-.7.181-1.14.181-1.42 0-1.894-.722-1.894-2.188 0-1.398.45-2.222 1.872-2.222.79 0 1.24.248 1.613.722l.982-.902c-.598-.857-1.647-1.117-2.63-1.117zm-8.413.102v6.834h4.85v-1.33h-3.27V8.553zM3.598 9.677a.635.635 0 110 1.27.635.635 0 010-1.27zm1.478.002h.42v4.22h1.052v.414H5.076z"/></svg>`,
    styles: []
})
export class SimpleIconsLgComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#A50034';
    @Input() className: string = 'simple-icons-lg'
    constructor() {}
    ngOnInit(): void {}
}
