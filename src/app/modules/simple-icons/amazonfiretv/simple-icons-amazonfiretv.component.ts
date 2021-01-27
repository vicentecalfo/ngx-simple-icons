import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-amazonfiretv',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon Fire TV icon</title><path d="M20.196 15.12c.265.337-.294 1.73-.542 2.353-.077.19.085.266.257.123 1.106-.926 1.39-2.867 1.166-3.149-.226-.277-2.16-.516-3.341.314-.183.127-.151.304.05.279.665-.08 2.147-.257 2.41.08m-.858.981c-2.064 1.523-5.056 2.333-7.632 2.333-3.611 0-6.862-1.334-9.322-3.555-.194-.176-.02-.414.21-.28 2.655 1.545 5.939 2.477 9.328 2.477 2.287 0 4.803-.476 7.115-1.458.348-.147.642.231.3.483m2.034-3.155a.388.388 0 0 1-.201-.04c-.041-.026-.087-.1-.133-.225l-1.734-4.355a1.79 1.79 0 0 0-.046-.117.266.266 0 0 1-.023-.108c0-.084.049-.128.146-.128h.58c.098 0 .165.014.205.04.04.026.082.102.127.226l1.344 3.823 1.343-3.823c.046-.124.089-.2.128-.226a.402.402 0 0 1 .205-.04h.54c.1 0 .148.044.148.128a.3.3 0 0 1-.025.108c-.016.04-.032.078-.044.117l-1.727 4.355c-.045.124-.09.199-.132.225a.388.388 0 0 1-.201.04zm-3.644.068c-.929 0-1.392-.463-1.392-1.392V8.739h-.706c-.13 0-.197-.066-.197-.196v-.246a.22.22 0 0 1 .045-.147c.03-.031.086-.055.171-.067l.717-.09.127-1.215c.013-.13.082-.196.207-.196h.41c.13 0 .196.066.196.196v1.196h1.276c.13 0 .195.065.195.197v.372c0 .13-.064.196-.195.196h-1.276v2.834c0 .243.055.411.162.51.108.098.293.147.555.147.124 0 .277-.016.46-.049.099-.02.164-.03.197-.03.052 0 .088.014.108.044.02.03.029.077.029.142v.266a.366.366 0 0 1-.04.19c-.026.043-.078.078-.157.103a3.018 3.018 0 0 1-.892.118m-4.665-2.976c.006-.052.011-.137.011-.255 0-.399-.094-.698-.28-.901-.186-.204-.46-.306-.818-.306-.412 0-.732.123-.962.369-.228.245-.36.61-.392 1.093zm-.942 3.07c-.803 0-1.411-.222-1.824-.667-.412-.444-.616-1.102-.616-1.972 0-.83.204-1.475.616-1.937.413-.46.988-.691 1.728-.691.62 0 1.098.176 1.432.524.332.351.5.846.5 1.487 0 .21-.017.422-.05.638-.014.077-.034.13-.064.156-.029.027-.077.04-.142.04h-3.08c.013.563.154.977.418 1.245.265.268.674.403 1.23.403.196 0 .385-.014.564-.04a5.04 5.04 0 0 0 .682-.166l.117-.035a.284.284 0 0 1 .09-.016c.085 0 .125.06.125.177v.276c0 .085-.012.144-.037.18a.441.441 0 0 1-.167.114 3.38 3.38 0 0 1-.701.205 4.236 4.236 0 0 1-.82.079m-5.424-.147c-.13 0-.195-.066-.195-.197v-4.58c0-.13.064-.195.195-.195h.432c.064 0 .116.012.153.039.036.025.06.076.072.146l.07.55c.176-.19.343-.34.499-.452a1.725 1.725 0 0 1 1.02-.323c.079 0 .158.003.235.01.112.014.168.072.168.176v.53c0 .117-.058.177-.178.177-.058 0-.114-.004-.17-.01a1.638 1.638 0 0 0-.18-.01c-.524 0-.973.157-1.346.47v3.472c0 .131-.066.197-.195.197zm-2.249 0c-.13 0-.196-.066-.196-.197v-4.58c0-.13.066-.195.196-.195h.579c.13 0 .195.064.195.195v4.58c0 .131-.065.197-.195.197zm.295-5.856c-.19 0-.339-.054-.447-.16a.581.581 0 0 1-.161-.428c0-.176.054-.318.16-.426.11-.109.257-.163.448-.163.189 0 .337.054.446.163.107.108.16.25.16.426a.581.581 0 0 1-.16.427.608.608 0 0 1-.446.161m-3.625 5.856c-.132 0-.197-.066-.197-.197v-4.01H.195c-.13 0-.195-.066-.195-.197v-.245c0-.065.014-.114.043-.147.03-.033.088-.055.173-.07l.705-.087v-.804c0-1.091.523-1.638 1.57-1.638.248 0 .51.036.784.109.072.019.122.047.152.088.029.038.044.107.044.205v.255c0 .124-.048.186-.148.186-.058 0-.14-.01-.248-.029-.11-.02-.23-.03-.369-.03-.3 0-.51.057-.633.172-.121.115-.181.303-.181.564v.903h1.324c.131 0 .197.064.197.195v.373c0 .13-.066.197-.197.197H1.892v4.01c0 .131-.065.197-.196.197Z"/></svg>`,
    styles: []
})
export class SimpleIconsAmazonfiretvComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FC4C02';
    @Input() className: string = 'simple-icons-amazonfiretv'
    constructor() {}
    ngOnInit(): void {}
}
