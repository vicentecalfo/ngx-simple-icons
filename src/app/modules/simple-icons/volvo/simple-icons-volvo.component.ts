import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-volvo',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Volvo icon</title><path d="M11.269 11.225h-.522v-.343h2.072v.343h-.516v1.55h.479c.443 0 .734-.292.734-.69h.342v1.038h-3.11v-.347h.522zm2.533.001h-.515v-.344h2.248v.344h-.544l.758 1.383.749-1.383h-.448v-.344h1.55v.344h-.516l-1.027 1.9-1.21-.001zm5.181-.392c1.041 0 1.6.52 1.6 1.171 0 .66-.527 1.187-1.594 1.187-1.067 0-1.599-.526-1.599-1.187 0-.651.553-1.17 1.593-1.17zM5.781 12.61l.748-1.383h-.447v-.344H7.63v.344h-.515l-1.028 1.9-1.21-.001-1.045-1.899h-.514v-.344h2.247v.344h-.543zm3.237-1.775c1.041 0 1.6.52 1.6 1.171 0 .66-.527 1.187-1.594 1.187-1.067 0-1.599-.526-1.599-1.187 0-.651.552-1.17 1.593-1.17zm-.551 1.157c.007-.432.214-.809.57-.803.356.007.544.39.537.823-.008.407-.176.831-.567.824-.38-.007-.547-.427-.54-.844zm9.965 0c.007-.432.214-.809.57-.803.356.007.544.39.537.823-.008.407-.176.831-.567.824-.38-.007-.547-.427-.54-.844zM3.226 9.83C4.198 5.887 7.757 2.963 12 2.963c4.243 0 7.802 2.924 8.774 6.866zm17.548 4.342c-.972 3.942-4.531 6.866-8.774 6.866-4.243 0-7.802-2.924-8.774-6.866zm.849-9.341l.568-.569c.404.532.769 1.096 1.087 1.688h.449V.283H18.06v.444c.589.317 1.15.68 1.678 1.082l-.569.568A11.947 11.947 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12c0-2.688-.884-5.17-2.377-7.17Z"/></svg>`,
    styles: []
})
export class SimpleIconsVolvoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#003057';
    @Input() className: string = 'simple-icons-volvo'
    constructor() {}
    ngOnInit(): void {}
}