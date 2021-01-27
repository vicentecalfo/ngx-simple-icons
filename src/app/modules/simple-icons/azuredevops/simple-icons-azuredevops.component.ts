import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-azuredevops',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Azure DevOps icon</title><path d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z"/></svg>`,
    styles: []
})
export class SimpleIconsAzuredevopsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0078D7';
    @Input() className: string = 'simple-icons-azuredevops'
    constructor() {}
    ngOnInit(): void {}
}
