import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-loom',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Loom icon</title><path d="M19.4 4.64C18.02 1.82 15.15 0 12 0 8.76 0 5.98 1.89 4.64 4.6 1.82 5.98 0 8.85 0 12c0 3.24 1.89 6.02 4.6 7.36C5.98 22.18 8.85 24 12 24c3.24 0 6.02-1.89 7.36-4.61C22.18 18.02 24 15.15 24 12c0-3.24-1.89-6.02-4.6-7.36zM12 1.5c1.99 0 3.87.89 5.13 2.37-.45-.08-.91-.12-1.38-.12-3.34 0-6.21 1.99-7.52 4.86h-.01v.03C7.76 9.67 7.5 10.8 7.5 12c0 .46.04.93.12 1.38-1.47-1.26-2.37-3.14-2.37-5.13C5.25 4.53 8.28 1.5 12 1.5zM12 9c.89 0 1.71.18 2.49.48.33.81.51 1.65.51 2.52 0 .89-.18 1.72-.48 2.49-.81.33-1.65.51-2.52.51-.89 0-1.72-.18-2.49-.48C9.18 13.71 9 12.87 9 12c0-.89.18-1.73.48-2.49C10.29 9.18 11.13 9 12 9zM1.5 12c0-1.99.89-3.87 2.37-5.13-.08.45-.12.91-.12 1.38 0 3.34 1.99 6.21 4.86 7.52v.01h.03c1.03.46 2.16.72 3.36.72.47 0 .93-.04 1.38-.12-1.26 1.47-3.14 2.37-5.13 2.37-3.72 0-6.75-3.03-6.75-6.75zM12 22.5c-1.99 0-3.87-.89-5.13-2.37.45.07.91.12 1.38.12 3.34 0 6.21-1.99 7.52-4.86l.02-.03c.46-1.03.72-2.16.72-3.36 0-.47-.04-.93-.12-1.38 1.47 1.26 2.37 3.14 2.37 5.13-.01 3.72-3.04 6.75-6.76 6.75zm8.13-5.37c.08-.45.12-.92.12-1.38 0-3.35-1.99-6.21-4.86-7.52-.02-.02-.02-.02-.03-.02-1.03-.45-2.16-.71-3.36-.71-.47 0-.93.04-1.38.12 1.26-1.47 3.14-2.37 5.13-2.37 3.72 0 6.75 3.03 6.75 6.75 0 1.99-.89 3.87-2.37 5.13z"/></svg>`,
    styles: []
})
export class SimpleIconsLoomComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FD5E60';
    @Input() className: string = 'simple-icons-loom'
    constructor() {}
    ngOnInit(): void {}
}
