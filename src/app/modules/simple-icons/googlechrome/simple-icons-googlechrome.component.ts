import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-googlechrome',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome icon</title><path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0 1 24 11.972C24 18.57 18.569 24 11.968 24c-.302 0-.605-.011-.907-.034l4.905-8.347c.356-.376.655-.803.881-1.271a5.451 5.451 0 0 0-.043-4.748 5.156 5.156 0 0 0-.59-.91zm-3.24 8.575l-2.121 6.682C4.738 23.345 0 18.14 0 11.977 0 9.592.709 7.26 2.038 5.279l4.834 8.377c.18.539 1.119 2.581 3.067 3.327.998.382 2.041.481 3.035.282zM11.973 7.62c-2.006.019-3.878 1.544-4.281 3.512a4.478 4.478 0 0 0 1.237 4.032c1.214 1.186 3.14 1.578 4.734.927 1.408-.576 2.47-1.927 2.691-3.431.272-1.856-.788-3.832-2.495-4.629a4.413 4.413 0 0 0-1.886-.411zM7.046 9.962L2.259 4.963A12.043 12.043 0 0 1 11.997 0c4.56 0 8.744 2.592 10.774 6.675H12.558c-1.811-.125-3.288.52-4.265 1.453a5.345 5.345 0 0 0-1.247 1.834z"/></svg>`,
    styles: []
})
export class SimpleIconsGooglechromeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4285F4';
    @Input() className: string = 'simple-icons-googlechrome'
    constructor() {}
    ngOnInit(): void {}
}
