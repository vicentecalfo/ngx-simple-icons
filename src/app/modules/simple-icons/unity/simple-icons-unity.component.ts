import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-unity',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Unity icon</title><path d="M24 9.533L21.374 0 11.57 2.555l-1.45 2.49-2.945-.022L0 12l7.176 6.978 2.943-.023 1.454 2.49 9.8 2.554L24 14.47 22.508 12 24 9.533zM10.356 5.445l7.499-1.874-4.304 7.251H4.94l5.416-5.377zm0 13.11L4.94 13.18h8.61l4.305 7.251-7.5-1.874zm9.598.696l-4.307-7.25 4.307-7.253L22.033 12l-2.08 7.25z"/></svg>`,
    styles: []
})
export class SimpleIconsUnityComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-unity'
    constructor() {}
    ngOnInit(): void {}
}
