import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-terraform',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Terraform icon</title><path d="M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z"/></svg>`,
    styles: []
})
export class SimpleIconsTerraformComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#623CE4';
    @Input() className: string = 'simple-icons-terraform'
    constructor() {}
    ngOnInit(): void {}
}
