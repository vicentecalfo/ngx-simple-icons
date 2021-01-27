import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-influxdb',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>InfluxDB icon</title><path d="M23.775 14.443L21.482 4.5c-.128-.536-.621-1.093-1.178-1.243L9.868.043C9.739 0 9.589 0 9.418 0c-.45 0-.9.171-1.222.45L.718 7.414C.31 7.78.096 8.507.225 9.021l2.443 10.65c.128.536.621 1.093 1.178 1.243l9.772 3.043c.128.043.278.043.45.043.45 0 .9-.171 1.221-.45l7.993-7.436c.407-.428.622-1.114.493-1.671zM10.961 2.4l7.178 2.207c.279.086.279.214 0 .279l-3.771.857c-.279.086-.686-.043-.879-.257l-2.614-2.829c-.236-.236-.193-.343.086-.257zm4.478 12.857c.086.279-.107.45-.385.364l-7.736-2.4c-.279-.085-.343-.321-.129-.514L13.104 7.2c.214-.214.45-.129.514.15zM2.69 8.25L8.968 2.4c.214-.214.536-.171.75.021l3.15 3.408c.214.214.171.535-.022.75l-6.278 5.85c-.214.214-.536.171-.75-.022L2.668 9c-.214-.236-.193-.579.021-.75zm1.522 9.257l-1.65-7.286c-.086-.278.043-.342.235-.128l2.615 2.828c.214.215.278.622.214.9l-1.136 3.686c-.085.3-.214.3-.278 0zm9.193 4.286l-8.208-2.55a.555.555 0 01-.364-.686l1.372-4.414a.555.555 0 01.685-.364l8.207 2.528c.279.086.45.386.365.686l-1.372 4.414a.598.598 0 01-.685.386zm7.285-5.979l-5.485 5.1c-.215.215-.322.129-.236-.15l1.136-3.685c.085-.279.385-.579.685-.622l3.772-.857c.278-.107.321.021.128.214zm.6-1.114l-4.521 1.029c-.279.085-.579-.108-.643-.386l-1.929-8.357c-.085-.279.108-.579.386-.643l4.522-1.029c.278-.085.578.107.642.386l1.929 8.357c.064.322-.107.6-.386.643z"/></svg>`,
    styles: []
})
export class SimpleIconsInfluxdbComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#22ADF6';
    @Input() className: string = 'simple-icons-influxdb'
    constructor() {}
    ngOnInit(): void {}
}
