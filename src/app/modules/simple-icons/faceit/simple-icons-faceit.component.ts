import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-faceit',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>FACEIT icon</title><path d="M23.999 2.705a.167.167 0 00-.312-.1 1141.27 1141.27 0 00-6.053 9.375H.218c-.221 0-.301.282-.11.352 7.227 2.73 17.667 6.836 23.5 9.134.15.06.39-.08.39-.18z"/></svg>`,
    styles: []
})
export class SimpleIconsFaceitComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF5500';
    @Input() className: string = 'simple-icons-faceit'
    constructor() {}
    ngOnInit(): void {}
}
