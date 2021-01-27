import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-opel',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Opel icon</title><path d="M23.82,12.921l-2.256-0.143c0.021-0.256,0.031-0.516,0.031-0.777c0-5.302-4.298-9.6-9.6-9.6 c-4.588,0-8.423,3.218-9.373,7.52H0.851c-0.116,0-0.22,0.055-0.285,0.141l-0.527,0.728C0.014,10.819,0,10.857,0,10.899 c0,0.1,0.08,0.18,0.18,0.18l2.247,0.14C2.406,11.477,2.395,11.737,2.395,12c0,5.302,4.298,9.6,9.6,9.6 c4.588,0,8.423-3.218,9.374-7.52h1.78c0.116,0,0.22-0.055,0.285-0.141l0.527-0.728C23.986,13.181,24,13.143,24,13.101 C24,13.001,23.919,12.921,23.82,12.921z M11.995,20.245c-4.507,0-8.245-3.738-8.245-8.245 c0-0.234,0.011-0.467,0.031-0.696l6.899,0.43l-2.984,2.061c-0.04,0.028-0.067,0.075-0.067,0.128c0,0.086,0.07,0.156,0.156,0.156 h12.183C19.031,17.601,15.785,20.245,11.995,20.245z M20.21,12.692l-6.892-0.438l2.991-2.049c0.041-0.028,0.067-0.075,0.067-0.128 c0-0.086-0.07-0.156-0.156-0.156H4.022c0.937-3.521,4.183-6.165,7.973-6.165c4.507,0,8.245,3.738,8.245,8.245C20.24,12.233,20.23,12.463,20.21,12.692z"/></svg>`,
    styles: []
})
export class SimpleIconsOpelComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F7D900';
    @Input() className: string = 'simple-icons-opel'
    constructor() {}
    ngOnInit(): void {}
}
