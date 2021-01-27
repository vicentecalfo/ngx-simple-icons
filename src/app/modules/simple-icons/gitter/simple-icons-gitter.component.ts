import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-gitter',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitter icon</title><path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"/></svg>`,
    styles: []
})
export class SimpleIconsGitterComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#ED1965';
    @Input() className: string = 'simple-icons-gitter'
    constructor() {}
    ngOnInit(): void {}
}
