import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-affinitydesigner',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Affinity Designer icon</title><path d="M10.44 0L0 18.083v5.197a.72.72 0 00.713.72h10.023L5.7 15.277 14.52 0zm5.16 0l-4.86 8.418 3.718 6.439H24V.718A.72.72 0 0023.28 0zm-5.4 9.353l-2.064 3.575a1.289 1.289 0 000 1.288c.23.4.656.64 1.117.64h4.125zm-3.122 6.44L11.816 24h11.471a.72.72 0 00.713-.718v-7.49Z"/></svg>`,
    styles: []
})
export class SimpleIconsAffinitydesignerComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1B72BE';
    @Input() className: string = 'simple-icons-affinitydesigner'
    constructor() {}
    ngOnInit(): void {}
}
