import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-svelte',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Svelte icon</title><path d="M20.703 3.17c-2.217-3.193-6.63-4.129-9.804-2.095l-5.594 3.56A6.357 6.357 0 002.42 8.926a6.659 6.659 0 00.671 4.332 6.14 6.14 0 00-.956 2.4 6.843 6.843 0 001.16 5.166c2.237 3.193 6.63 4.13 9.803 2.115l5.593-3.56a6.357 6.357 0 002.888-4.29 6.659 6.659 0 00-.67-4.332 6.14 6.14 0 00.955-2.4c.325-1.83-.081-3.702-1.16-5.187M10.35 21.13a4.433 4.433 0 01-4.759-1.77 4.119 4.119 0 01-.712-3.112c.04-.183.082-.346.122-.53l.102-.324.285.203a7.419 7.419 0 002.196 1.099l.204.06-.02.204c-.021.285.06.59.223.834.325.468.895.69 1.444.549a1.73 1.73 0 00.346-.142l5.573-3.56c.284-.183.468-.447.529-.773a1.262 1.262 0 00-.204-.935 1.335 1.335 0 00-1.444-.53 1.73 1.73 0 00-.346.143l-2.115 1.343a3.783 3.783 0 01-1.14.488 4.433 4.433 0 01-4.759-1.77 4.108 4.108 0 01-.69-3.111 3.85 3.85 0 011.748-2.583l5.573-3.56a4.427 4.427 0 011.14-.508 4.433 4.433 0 014.759 1.77 4.12 4.12 0 01.71 3.111 4.71 4.71 0 01-.141.529l-.102.325-.284-.203a7.419 7.419 0 00-2.197-1.098l-.203-.061.02-.204c.02-.284-.061-.59-.224-.834a1.335 1.335 0 00-1.444-.528 1.76 1.76 0 00-.346.142l-5.572 3.58a1.153 1.153 0 00-.53.772c-.06.326.021.672.204.936.326.468.895.67 1.444.529a1.76 1.76 0 00.346-.143l2.136-1.362a4.427 4.427 0 011.139-.51 4.433 4.433 0 014.759 1.77c.65.896.895 2.014.712 3.113a3.85 3.85 0 01-1.75 2.583L11.51 20.62a4.9 4.9 0 01-1.16.508"/></svg>`,
    styles: []
})
export class SimpleIconsSvelteComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF3E00';
    @Input() className: string = 'simple-icons-svelte'
    constructor() {}
    ngOnInit(): void {}
}