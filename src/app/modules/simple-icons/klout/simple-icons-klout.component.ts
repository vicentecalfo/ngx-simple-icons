import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-klout',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Klout icon</title><path d="M0 2.673v14.72h16.17L24 21.327V2.673H0zm9.827 8.42h-1.17l-2.88 4.054H2.35l3.94-5.265-3.638-5.07h3.336l2.66 3.885h1.18v2.397zm8.407 4.053l-2.88-4.053h-1.966v4.053h-2.73V4.812h2.734v3.885h1.965l2.658-3.885h3.33l-3.636 5.07 3.94 5.265h-3.416z"/></svg>`,
    styles: []
})
export class SimpleIconsKloutComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E44600';
    @Input() className: string = 'simple-icons-klout'
    constructor() {}
    ngOnInit(): void {}
}
