import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-azurepipelines',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Azure Pipelines icon</title><path d="M1.8 18H0v6h6v-1.8H1.8zM23 0h-8.93a2 2 0 0 0-1.67.89L9 5.99H1a1 1 0 0 0-1 1v5.5l3.5 3.61 1.2-1.29 1.5 1.5L5 17.53l1.48 1.48 1.22-1.22 1.5 1.51L8 20.5l3.5 3.5H17a1 1 0 0 0 1-1v-8l5.11-3.4A2 2 0 0 0 24 9.92V1a1 1 0 0 0-1-1zm-5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`,
    styles: []
})
export class SimpleIconsAzurepipelinesComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#2560E0';
    @Input() className: string = 'simple-icons-azurepipelines'
    constructor() {}
    ngOnInit(): void {}
}
