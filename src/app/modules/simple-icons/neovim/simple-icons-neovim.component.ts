import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-neovim',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Neovim icon</title><path d="M2.214 4.954v13.615L7.655 24V10.314L3.312 3.845 2.214 4.954zm4.999 17.98l-4.557-4.548V5.136l.59-.596 3.967 5.908v12.485zm14.573-4.457l-.862.937-4.24-6.376V0l5.068 5.092.034 13.385zM7.431.001l12.998 19.835-3.637 3.637L3.787 3.683 7.43 0z"/></svg>`,
    styles: []
})
export class SimpleIconsNeovimComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#57A143';
    @Input() className: string = 'simple-icons-neovim'
    constructor() {}
    ngOnInit(): void {}
}
