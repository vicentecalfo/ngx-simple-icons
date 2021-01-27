import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-cmake',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>CMake icon</title><path d="M11.769.066L.067 23.206l12.76-10.843zM23.207 23.934L7.471 17.587 0 23.934zM24 23.736L12.298.463l1.719 19.24zM12.893 12.959l-5.025 4.298 5.62 2.248z"/></svg>`,
    styles: []
})
export class SimpleIconsCmakeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#064F8C';
    @Input() className: string = 'simple-icons-cmake'
    constructor() {}
    ngOnInit(): void {}
}
