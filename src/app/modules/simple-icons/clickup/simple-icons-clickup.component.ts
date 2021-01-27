import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-clickup',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>ClickUp icon</title><path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z"/></svg>`,
    styles: []
})
export class SimpleIconsClickupComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7B68EE';
    @Input() className: string = 'simple-icons-clickup'
    constructor() {}
    ngOnInit(): void {}
}
