import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-threema',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Threema icon</title><path d="M11.998 20.486a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm-6.335 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm12.671 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zM12 0c5.7 0 10.322 4.066 10.322 9.082 0 5.016-4.622 9.083-10.322 9.083a11.45 11.45 0 0 1-4.523-.917l-5.171 1.293 1.105-4.42c-1.094-1.442-1.733-3.175-1.733-5.039C1.678 4.066 6.3 0 12 0zm-.001 4.235A2.926 2.926 0 0 0 9.072 7.16v1.17h-.115a.47.47 0 0 0-.47.47v4.126c0 .26.21.471.47.471h6.086c.26 0 .47-.21.47-.47V8.798a.47.47 0 0 0-.47-.47h-.115v-1.17a2.927 2.927 0 0 0-2.93-2.924zm0 1.17c.972 0 1.758.786 1.758 1.754v1.17h-3.514v-1.17c0-.968.786-1.754 1.756-1.754z"/></svg>`,
    styles: []
})
export class SimpleIconsThreemaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#3FE669';
    @Input() className: string = 'simple-icons-threema'
    constructor() {}
    ngOnInit(): void {}
}
