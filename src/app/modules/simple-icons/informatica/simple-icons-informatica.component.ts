import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-informatica',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Informatica icon</title><path d="M12 0l3.547 10.788-4.5-1.255-.25 4.43 7.121 4.035V18h.001l5.919-6zm-.64.65L.162 12l6.32 6.407L12 24l5.184-5.255-9.736-3.856z"/></svg>`,
    styles: []
})
export class SimpleIconsInformaticaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF4D00';
    @Input() className: string = 'simple-icons-informatica'
    constructor() {}
    ngOnInit(): void {}
}
