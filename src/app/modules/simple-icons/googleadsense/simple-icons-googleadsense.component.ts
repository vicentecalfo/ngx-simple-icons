import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-googleadsense',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google AdSense icon</title><path d="M11.842 1.375a3.958 3.958 0 0 0-.352.01 3.935 3.935 0 0 0-3.133 1.933 4.233 4.233 0 0 0-.134.254l-3.67 6.28a4.63 4.63 0 0 0-.227.386l-2.263 3.907a4.847 4.847 0 0 1 2.468-.36 4.765 4.765 0 0 1 1.858.617A4.981 4.981 0 0 1 8.81 18.08l2.306-3.969a3.753 3.753 0 0 0 .227-.384l3.67-6.282a3.86 3.86 0 0 0-1.284-5.549 3.958 3.958 0 0 0-1.888-.521zm8.36 6.553a3.894 3.894 0 0 0-3.458 1.937l-3.889 6.719a3.874 3.874 0 0 0 1.424 5.3 3.894 3.894 0 0 0 5.313-1.42l3.888-6.718a3.875 3.875 0 0 0-1.423-5.299 3.894 3.894 0 0 0-1.856-.52zm-16.384 6.83A3.987 3.987 0 0 0 .721 16.46l-.065.11c-.043.066-.096.123-.136.193-1.08 1.887-.418 4.253 1.453 5.343 1.87 1.09 4.305.395 5.384-1.494.028-.047.04-.098.065-.146l.004-.006c.96-1.86.278-4.13-1.543-5.191a3.792 3.792 0 0 0-1.666-.51 3.987 3.987 0 0 0-.399-.002Z"/></svg>`,
    styles: []
})
export class SimpleIconsGoogleadsenseComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4285F4';
    @Input() className: string = 'simple-icons-googleadsense'
    constructor() {}
    ngOnInit(): void {}
}