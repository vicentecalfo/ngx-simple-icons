import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-spinrilla',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spinrilla icon</title><path d="M12 8.816a3.184 3.184 0 1 0 0 6.368 3.184 3.184 0 1 0 0-6.368zM12 0v3.918A8.082 8.082 0 0 0 3.918 12H0A12 12 0 0 1 12 0zm0 24v-3.918A8.082 8.082 0 0 0 20.082 12H24a12 12 0 0 1-12 12z"/></svg>`,
    styles: []
})
export class SimpleIconsSpinrillaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#460856';
    @Input() className: string = 'simple-icons-spinrilla'
    constructor() {}
    ngOnInit(): void {}
}
