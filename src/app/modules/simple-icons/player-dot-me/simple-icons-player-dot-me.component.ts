import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-player-dot-me',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Player.me icon</title><path d="M11.981 0a8.957 8.957 0 0 0-8.956 8.957v.363C3.283 15.828 10.082 24 10.082 24V13.205c-1.638-.747-2.756-2.369-2.756-4.253a4.66 4.66 0 1 1 6.152 4.416l-.033.01v4.427c4.296-.713 7.531-4.401 7.531-8.845A8.959 8.959 0 0 0 12.017.001h-.038.002z"/></svg>`,
    styles: []
})
export class SimpleIconsPlayerDotMeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#C0379A';
    @Input() className: string = 'simple-icons-player-dot-me'
    constructor() {}
    ngOnInit(): void {}
}
