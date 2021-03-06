import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-virustotal',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>VirusTotal icon</title><path d="M10.87 12L0 22.68h24V1.32H0zm10.73 8.52H5.28l8.637-8.448L5.28 3.48H21.6z"/></svg>`,
    styles: []
})
export class SimpleIconsVirustotalComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#394EFF';
    @Input() className: string = 'simple-icons-virustotal'
    constructor() {}
    ngOnInit(): void {}
}
