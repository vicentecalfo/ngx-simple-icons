import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-nintendogamecube',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Nintendo GameCube icon</title><path d="M6.816 15.126l4.703 2.715v-5.433L6.814 9.695v5.432zm-2.025 1.168l6.73 3.882v3.82L1.481 18.206V6.616l3.31 1.91v7.769zM12 6.145L7.298 8.863 12 11.579l4.704-2.717L12 6.146zm0-2.332l5.659 3.274 3.31-1.91L12 0 1.975 5.79 5.28 7.695zm7.207 12.48v-3.947l-2.023 1.167v1.614l-4.703 2.715v.005-5.436L22.518 6.62v11.587L12.48 24v-3.817l6.727-3.887z"/></svg>`,
    styles: []
})
export class SimpleIconsNintendogamecubeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#6A5FBB';
    @Input() className: string = 'simple-icons-nintendogamecube'
    constructor() {}
    ngOnInit(): void {}
}
