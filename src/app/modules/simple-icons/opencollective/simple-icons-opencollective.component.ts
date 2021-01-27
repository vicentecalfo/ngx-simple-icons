import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-opencollective',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Open Collective icon</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.54 0 4.894-.79 6.834-2.135l-3.107-3.109a7.715 7.715 0 1 1 0-13.512l3.107-3.109A11.943 11.943 0 0 0 12 0zm9.865 5.166l-3.109 3.107A7.67 7.67 0 0 1 19.715 12a7.682 7.682 0 0 1-.959 3.727l3.109 3.107A11.943 11.943 0 0 0 24 12c0-2.54-.79-4.894-2.135-6.834z"/></svg>`,
    styles: []
})
export class SimpleIconsOpencollectiveComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7FADF2';
    @Input() className: string = 'simple-icons-opencollective'
    constructor() {}
    ngOnInit(): void {}
}
