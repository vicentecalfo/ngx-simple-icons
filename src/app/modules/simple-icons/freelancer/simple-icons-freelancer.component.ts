import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-freelancer',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Freelancer icon</title><path d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z"/></svg>`,
    styles: []
})
export class SimpleIconsFreelancerComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#29B2FE';
    @Input() className: string = 'simple-icons-freelancer'
    constructor() {}
    ngOnInit(): void {}
}
