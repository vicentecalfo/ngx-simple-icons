import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-artstation',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ArtStation icon</title><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/></svg>`,
    styles: []
})
export class SimpleIconsArtstationComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#13AFF0';
    @Input() className: string = 'simple-icons-artstation'
    constructor() {}
    ngOnInit(): void {}
}
