import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-fandom',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Fandom icon</title><path d="M22.192 11.317c0 .2-.08.392-.222.533l-9.28 9.306a.686.686 0 0 1-.512.224.743.743 0 0 1-.534-.225l-.654-.614a.284.284 0 0 1-.007-.41l10.713-10.72c.182-.182.497-.054.497.201v1.706zm-11.904 7.018l-.532.475a.445.445 0 0 1-.604-.014l-7.065-6.897a.918.918 0 0 1-.277-.66V9.952c0-.464.566-.698.9-.371l7.499 7.322c.13.13.35.396.35.717 0 .205-.047.495-.27.717zM3.973 4.987l2.431-2.402a.292.292 0 0 1 .41 0l8.139 8.045a2.19 2.19 0 0 1 0 3.12l-2.43 2.401a.293.293 0 0 1-.408 0l-8.14-8.047a2.172 2.172 0 0 1-.65-1.56c0-.59.23-1.144.648-1.557zm9.632 1.375l2.54-2.51a2.241 2.241 0 0 1 1.897-.623c.5.068.956.326 1.313.679l2.571 2.542a.284.284 0 0 1 0 .406l-3.91 3.867a.29.29 0 0 1-.41 0l-4.001-3.956a.285.285 0 0 1 0-.405zM23.7 5.885L18.04.19a.603.603 0 0 0-.852-.002l-4.493 4.485a.898.898 0 0 1-1.262.002L6.94.237a.603.603 0 0 0-.842-.002L.31 5.871c-.2.194-.31.458-.31.733v5.34c0 .271.11.534.305.726l11.277 11.145a.603.603 0 0 0 .846 0L23.696 12.67c.194-.193.304-.455.304-.727V6.606c0-.27-.106-.529-.298-.72z"/></svg>`,
    styles: []
})
export class SimpleIconsFandomComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00D6D6';
    @Input() className: string = 'simple-icons-fandom'
    constructor() {}
    ngOnInit(): void {}
}
