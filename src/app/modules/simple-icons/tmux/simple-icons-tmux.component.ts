import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-tmux',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>tmux icon</title><path d="M24 2.251V10.5H12.45V0h9.3A2.251 2.251 0 0 1 24 2.251zM12.45 11.4H24v10.5h-.008A2.25 2.25 0 0 1 21.75 24H2.25a2.247 2.247 0 0 1-2.242-2.1H0V2.251A2.251 2.251 0 0 1 2.25 0h9.3v21.6h.9V11.4zm11.242 10.5H.308a1.948 1.948 0 0 0 1.942 1.8h19.5a1.95 1.95 0 0 0 1.942-1.8z"/></svg>`,
    styles: []
})
export class SimpleIconsTmuxComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1BB91F';
    @Input() className: string = 'simple-icons-tmux'
    constructor() {}
    ngOnInit(): void {}
}