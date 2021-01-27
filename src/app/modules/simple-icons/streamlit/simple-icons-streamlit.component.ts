import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-streamlit',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Streamlit icon</title><path d="M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z"/></svg>`,
    styles: []
})
export class SimpleIconsStreamlitComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF4B4B';
    @Input() className: string = 'simple-icons-streamlit'
    constructor() {}
    ngOnInit(): void {}
}
