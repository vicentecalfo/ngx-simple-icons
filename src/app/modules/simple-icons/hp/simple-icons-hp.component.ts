import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-hp',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>HP icon</title><path d="M12 24h-.354l2.46-6.745h3.372c.597 0 1.249-.448 1.454-1.007l2.664-7.304c.429-1.192-.242-2.18-1.528-2.18h-4.695l-6.15 16.92C3.933 22.415 0 17.663 0 12 0 6.503 3.708 1.863 8.758.447L2.646 17.255H5.18l3.242-8.926h1.92l-3.243 8.926h2.535l3.037-8.33c.428-1.192-.242-2.18-1.528-2.18H9L11.46.02c.186 0 .354-.019.54-.019 6.634 0 12 5.366 12 12s-5.366 12-12 12zm7.267-15.67h-1.92l-2.682 7.34h1.919z"/></svg>`,
    styles: []
})
export class SimpleIconsHpComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0096D6';
    @Input() className: string = 'simple-icons-hp'
    constructor() {}
    ngOnInit(): void {}
}
