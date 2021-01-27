import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-allocine',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>AlloCiné icon</title><path d="M20.447 21.162L17.207.695a.815.815 0 0 0-.926-.686h-.004l-3.42.551a2.632 2.632 0 0 1-5.199.824l-3.42.542a.815.815 0 0 0-.687.926v.003l3.244 20.458c.069.443.484.746.928.677h.001l3.421-.542a2.636 2.636 0 1 1 5.208-.815l3.42-.541a.81.81 0 0 0 .675-.925v-.005zM14.77 8.21l-1.23 1.805a.854.854 0 0 1-.433.3c-.509.12-1.249-.962-1.772 1.505-.524 2.467.592 1.784 1.004 2.106a.875.875 0 0 1 .283.436l.394 2.142h-.012a.602.602 0 0 1-.343.644c-.454.183-1.167.427-1.588.337-.903-.193-2.338-2.428-1.562-6.072.777-3.643 2.994-5.078 3.896-4.885.413.09.972.601 1.315.953a.602.602 0 0 1 .048.729z"/></svg>`,
    styles: []
})
export class SimpleIconsAllocineComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FECC00';
    @Input() className: string = 'simple-icons-allocine'
    constructor() {}
    ngOnInit(): void {}
}
