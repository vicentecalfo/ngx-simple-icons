import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-sparkfun',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SparkFun icon</title><path d="M17.0532 3.8362s.34 1.4413-.7462 1.6403c-.7541.133-1.9733-.6171-2.5864-1.3632-.7582-.9222-.6602-1.6493-.075-2.2905.8831-.9802 2.3994-.6 2.3994-.6s-2.7745-2.4305-5.661-.4382c-2.5706 1.7704-1.8324 4.1808.488 6.2862 2.0904 1.9024.4221 3.9888-1.6883 3.7197-1.4403-.184-2.0304-1.3442-1.6873-2.0554.3-.61 1.3362-.9842 1.3362-.9842s-1.1912-.48-2.5905.046C4.98 8.27 3.9447 9.3093 4.0267 11.9198V24s1.3013-1.6023 2.8326-3.2356c1.7113-1.8404 2.4924-3.0826 4.2508-2.9376 3.3286.207 5.736-1.2742 7.3723-3.6456 3.1416-4.5629.6802-9.6619-1.4302-10.345zm0 0"/></svg>`,
    styles: []
})
export class SimpleIconsSparkfunComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E53525';
    @Input() className: string = 'simple-icons-sparkfun'
    constructor() {}
    ngOnInit(): void {}
}
