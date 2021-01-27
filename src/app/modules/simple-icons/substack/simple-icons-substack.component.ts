import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-substack',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Substack icon</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>`,
    styles: []
})
export class SimpleIconsSubstackComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF6719';
    @Input() className: string = 'simple-icons-substack'
    constructor() {}
    ngOnInit(): void {}
}
