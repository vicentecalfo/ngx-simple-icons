import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-roundcube',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Roundcube icon</title><path d="M19.9 8.6c0 1.2-.3 2.3-.7 3.3l.7-.4 3.4-2L20.6 8c-.3-4.5-4-8-8.6-8S3.7 3.5 3.4 8L.7 9.6l3.1 1.8.9.5c-.5-1-.7-2.1-.7-3.3C4 4.2 7.6.7 11.9.7c4.5 0 8 3.5 8 7.9zM.1 17.3L11.7 24v-7.4L.1 9.9zm12.2-.7V24l11.6-6.7V9.9z"/></svg>`,
    styles: []
})
export class SimpleIconsRoundcubeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#37BEFF';
    @Input() className: string = 'simple-icons-roundcube'
    constructor() {}
    ngOnInit(): void {}
}
