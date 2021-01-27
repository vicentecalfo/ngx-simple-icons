import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-microsoftexchange',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft Exchange icon</title><path d="M24 7.875q0 .293-.117.58t-.317.486L20.496 12l3.07 3.059q.2.199.317.486.117.287.117.58V21q0 .316-.117.586-.117.27-.322.475-.206.205-.475.322-.27.117-.586.117h-4.875q-.293 0-.58-.117t-.486-.317l-3.059-3.07-3.059 3.07q-.199.2-.486.317-.287.117-.58.117H4.5q-.316 0-.586-.117-.27-.117-.475-.322-.205-.206-.322-.475Q3 21.316 3 21v-3H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H3V3q0-.316.117-.586.117-.27.322-.475.206-.205.475-.322.27-.117.586-.117h4.875q.293 0 .58.117t.486.317l3.059 3.07 3.059-3.07q.199-.2.486-.317.287-.117.58-.117H22.5q.316 0 .586.117.27.117.475.322.205.206.322.475Q24 2.684 24 3zM4.5 3v3h6.504q.41 0 .703.293t.293.703V5.625L9.375 3zM3.375 15.938h5.25v-1.583h-3.41v-1.593h3.047V11.18H5.215V9.656H8.46V8.062H3.375zm19.125.187L19.875 13.5h-3.691q-.247 0-.463.094-.217.094-.375.252-.159.158-.252.375-.094.216-.094.463v3.691L17.625 21H22.5zm0-8.25V3h-4.875L13.5 7.125v2.191q0 .774-.404 1.424-.405.65-1.096.99v5.274q0 .41-.293.703t-.703.293H4.5v3h4.875l4.125-4.125v-2.191q0-.563.21-1.05.212-.486.575-.849t.85-.574Q15.62 12 16.184 12h2.191Z"/></svg>`,
    styles: []
})
export class SimpleIconsMicrosoftexchangeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0078D4';
    @Input() className: string = 'simple-icons-microsoftexchange'
    constructor() {}
    ngOnInit(): void {}
}
