import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-proto-dot-io',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Proto.io icon</title><path d="M12 11.997c-.728 0-1.316-.59-1.316-1.317S11.272 9.363 12 9.363s1.316.589 1.316 1.316-.588 1.318-1.316 1.318zm2.916-.021c0-2.828-1.109-5.397-2.916-7.298-1.807 1.9-2.916 4.47-2.916 7.298 0 1.297.234 2.535.66 3.683-.618.9-1.074 2.16-1.275 3.616.639-.767 1.422-1.306 2.292-1.591.363.555.78 1.096 1.239 1.574.461-.494.876-1.02 1.239-1.59.87.271 1.653.826 2.29 1.576-.199-1.456-.655-2.716-1.275-3.615.427-1.155.66-2.385.66-3.69l.002.037zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-22C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>`,
    styles: []
})
export class SimpleIconsProtoDotIoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#34A7C1';
    @Input() className: string = 'simple-icons-proto-dot-io'
    constructor() {}
    ngOnInit(): void {}
}
