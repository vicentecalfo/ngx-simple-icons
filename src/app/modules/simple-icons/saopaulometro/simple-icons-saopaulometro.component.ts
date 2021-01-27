import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-saopaulometro',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>São Paulo Metro icon</title><path d="M13.366 6.543l5.092 5.456-5.092 5.456V6.543zM24 0v24H0V0h24zm-5.542 11.999l1.747-1.872L11.976 1.9l-8.227 8.228 1.747 1.871-1.747 1.871 8.227 8.229 8.228-8.229-1.746-1.871zm-7.87 5.455V6.543l-5.092 5.456 5.092 5.455z"/></svg>`,
    styles: []
})
export class SimpleIconsSaopaulometroComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#004382';
    @Input() className: string = 'simple-icons-saopaulometro'
    constructor() {}
    ngOnInit(): void {}
}
