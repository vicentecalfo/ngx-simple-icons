import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-jamboard',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Jamboard icon</title><path d="M12.143 0v7.877h7.783V0zm0 8.155v7.784h7.783V8.155zm-.28.005a7.926 7.923 0 0 0-7.789 7.917A7.926 7.923 0 0 0 12 24a7.926 7.923 0 0 0 7.918-7.78h-8.056Z"/></svg>`,
    styles: []
})
export class SimpleIconsJamboardComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F37C20';
    @Input() className: string = 'simple-icons-jamboard'
    constructor() {}
    ngOnInit(): void {}
}
