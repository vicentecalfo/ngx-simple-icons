import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-codeforces',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Codeforces icon</title><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/></svg>`,
    styles: []
})
export class SimpleIconsCodeforcesComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1F8ACB';
    @Input() className: string = 'simple-icons-codeforces'
    constructor() {}
    ngOnInit(): void {}
}
