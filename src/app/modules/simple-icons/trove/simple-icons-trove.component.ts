import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-trove',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Trove icon</title><path d="M19.699 12.775v8.529c0 .55-.54.945-1.058.735l-4.911-1.946a.786.786 0 01-.488-.735V7.882c0-.435.352-.79.786-.79h4.722v-2.75H5.277v2.75h4.72a.79.79 0 01.788.79v11.476a.786.786 0 01-.489.735l-4.91 1.946a.778.778 0 01-1.059-.735v-8.522H.042v8.999S.042 24 2.117 24h19.765c2.076 0 2.076-2.219 2.076-2.219v-8.992zM21.815 0H2.226C.153 0 .042 2.087.042 2.087v9.117H4.98c.434 0 .787.353.787.789v8.214l3.486-1.394V8.658H4.56a.789.789 0 01-.787-.79V3.566a.79.79 0 01.787-.79h14.882c.434 0 .786.354.786.79v4.316a.777.777 0 01-.786.776h-4.668v10.155l3.487 1.394v-8.214c0-.436.353-.789.787-.789h4.91V2.087S23.892 0 21.815 0z"/></svg>`,
    styles: []
})
export class SimpleIconsTroveComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#609540';
    @Input() className: string = 'simple-icons-trove'
    constructor() {}
    ngOnInit(): void {}
}
