import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-serverless',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Serverless icon</title><path d="M0 17.57h4.248l-1.316 3.974H0zm0-7.557h6.75l-1.316 3.974H0zm0-7.557h9.252L7.936 6.431H0zm13.44 0H24v3.975H12.123zM9.62 13.987l1.317-3.974H24v3.974zM8.436 17.57H24v3.975H7.119Z"/></svg>`,
    styles: []
})
export class SimpleIconsServerlessComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FD5750';
    @Input() className: string = 'simple-icons-serverless'
    constructor() {}
    ngOnInit(): void {}
}