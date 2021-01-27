import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-gitpod',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitpod icon</title><path d="M5.982 8.309L12 11.783l6.023-3.476-6.022-3.47zm5.767 3.911L5.727 8.743v6.954l6.022 3.45zM3.875 7.092L12 2.405l8.131 4.685 2.074-1.196L12 0 1.796 5.892zm7.874 14.481L3.62 16.917v-9.39L1.545 6.329v11.78L11.75 24zm.503-9.353v6.926l6.028-3.45v-2.397l-4.214 2.398v-2.423l6.32-3.597v7.24l-8.134 4.656V24l10.203-5.89V6.33z"/></svg>`,
    styles: []
})
export class SimpleIconsGitpodComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1AA6E4';
    @Input() className: string = 'simple-icons-gitpod'
    constructor() {}
    ngOnInit(): void {}
}
