import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-homeadvisor',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HomeAdvisor icon</title><path d="M15.98 2.442H8.02L0 10.46h2.275l6.882-6.88 6.881 6.881H24l-8.02-8.018m-.492 9.348L9.157 5.459 4.01 10.605v4.987a1.33 1.33 0 0 0 1.329 1.329h6.077l4.637 4.637v-4.637h2.598a1.33 1.33 0 0 0 1.33-1.33V11.79h-4.494Z"/></svg>`,
    styles: []
})
export class SimpleIconsHomeadvisorComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F68315';
    @Input() className: string = 'simple-icons-homeadvisor'
    constructor() {}
    ngOnInit(): void {}
}
