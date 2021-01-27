import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-fastapi',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>FastAPI icon</title><path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"/></svg>`,
    styles: []
})
export class SimpleIconsFastapiComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#009688';
    @Input() className: string = 'simple-icons-fastapi'
    constructor() {}
    ngOnInit(): void {}
}
