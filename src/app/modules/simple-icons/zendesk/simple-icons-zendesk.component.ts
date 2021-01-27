import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-zendesk',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Zendesk icon</title><path d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"/></svg>`,
    styles: []
})
export class SimpleIconsZendeskComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#03363D';
    @Input() className: string = 'simple-icons-zendesk'
    constructor() {}
    ngOnInit(): void {}
}
