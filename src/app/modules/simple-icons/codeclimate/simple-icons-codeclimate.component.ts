import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-codeclimate',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Code Climate icon</title><path d="M16.047 5.32L24 13.273l-2.707 2.711-5.246-5.246-1.844 1.852-2.715-2.711zm-5.395 5.399l2.707 2.715 2.547 2.539-2.715 2.707-5.238-5.239-4.176 4.176-1.07 1.063L0 15.973 7.953 8.02zm0 0"/></svg>`,
    styles: []
})
export class SimpleIconsCodeclimateComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-codeclimate'
    constructor() {}
    ngOnInit(): void {}
}
