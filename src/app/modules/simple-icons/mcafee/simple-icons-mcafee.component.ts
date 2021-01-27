import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-mcafee',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>McAfee icon</title><path d="M12 4.8233L1.5793 0v19.1767L12 24l10.4207-4.8233V0zm6.172 11.626l-6.143 2.8428-6.1438-2.8429V6.6894l6.1439 2.8418 6.1429-2.8418z"/></svg>`,
    styles: []
})
export class SimpleIconsMcafeeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#C01818';
    @Input() className: string = 'simple-icons-mcafee'
    constructor() {}
    ngOnInit(): void {}
}
