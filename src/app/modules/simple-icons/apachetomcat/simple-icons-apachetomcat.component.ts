import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-apachetomcat',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apache Tomcat icon</title><path d="M12.66 3.494c-.377.637-.544 2.114-.502 3.162l-.005.004c.036.946.165 1.816.372 2.615-3.096.767-6.466 2.795-8.352 4.754-.882-1.19-1.232-2.168-1.336-2.908-.131-.936.092-1.794.646-2.482.867-1.077 2.098-1.153 3.365-.94-.025.2.001.391.081.51.335.494 2.135.668 3.21.189-.793-1.112-2.4-1.654-2.844-1.437a.762.762 0 00-.335.359c-.438-.078-.873-.137-1.19-.134-1.117.008-1.971.398-2.61 1.193-.628.78-.882 1.747-.734 2.8.14.996.633 2.055 1.46 3.154-.138.147-.27.293-.398.436C1.473 17.023 0 19.44 0 19.842v.207h2.658l-.046-.246c-.15-.793.15-1.785.763-2.526.386-.465 1.024-.996 2.027-1.241.891.87 2.027 1.794 3.291 2.685h1.976v-.208a.678.678 0 00-.327-.577c-.312-.204-.794-.232-1.237-.081-.421-.47-.658-1.098-.709-1.877 4.287.38 8.388 2.11 13.015 4.528h2.546l.033-.167c.048-.237-.082-.556-.346-.851-.456-.51-1.349-.752-2.095-.734-.514-.612-3.342-3.591-3.507-3.765a9.626 9.626 0 002.673-2.847h1.388v-.298H20.89a9.81 9.81 0 00.223-.419h.989v-.299h-.845c.628-1.359.975-2.918.942-4.625l.003.002c-.002-.468-.147-2.445-.415-2.989-.726.276-2.047 1.17-2.346 2.084a14.557 14.557 0 00-4.463.056c-.237-.984-1.423-1.736-2.318-2.16zm.164.577c.211 1.148.593 1.869 1.42 2.223.734-.21 1.58-.34 2.448-.388l.717 1.571.46-1.585c.876.029 1.736.142 2.485.349.762-.554 1.057-1.4 1.218-2.138.202.86.178 2.717.18 2.717a9.883 9.883 0 01-.158 1.988l-.824.35.726.11a9.19 9.19 0 01-.198.714l-.703.205.56.201c-.094.253-.2.5-.314.738h-1.16v.299h1.008a8.788 8.788 0 01-.238.419h-.77v.298h.583a8.634 8.634 0 01-2.921 2.748c-1.334-.664-2.341-1.634-3.079-2.748h.446v-.298h-.636a9.195 9.195 0 01-.236-.419h.872v-.299h-1.026a10.12 10.12 0 01-.46-1.094l.522-.147-.659-.263c-.066-.215-.127-.43-.18-.646l1.015-.069-1.16-.615c-.282-1.563-.225-3.08.062-4.221zm2.946 2.97c-.89 0-1.24.909-1.255.948l.252.094c.012-.033.302-.773 1.003-.773.154 0 .262.062.34.195.182.314.152.933 0 1.58h-1.227v.269h1.159a5.679 5.679 0 01-.496 1.225l-.064.112 1.537.967-.865.57.148.224.967-.637 1.043.681.143-.228-.967-.598 1.518-.986v-.001c-.318-.47-.42-.872-.286-1.329h.108l1.167-.001.002-.268h-1.175c.216-.51.52-.968 1.602-.968v-.27c-.999 0-1.596.397-1.883 1.238h-2.154c.15-.672.177-1.333-.046-1.715a.63.63 0 00-.57-.33zm.55 2.313h2.126c-.095.304-.057.763.178 1.157h-2.737c.166-.334.32-.74.433-1.157zm-3.683.321c.155.515.344.997.562 1.451h-.91v.299h1.06c.075.142.153.282.233.419H12.29v.298h1.478c.91 1.416 2.14 2.499 3.534 3.318a9.45 9.45 0 00.456-.28l.362.39-.61.938 1.04-.474.606.652-1.019.776 1.403-.363 1.905 2.05.16-.014c1.007-.086 1.58.46 1.73.63.112.124.179.237.215.326h-2.036c-4.67-2.437-8.771-4.155-13.127-4.53.01-.607.117-1.293.324-2.058l-.4-.108c-.213.786-.325 1.497-.338 2.134-.454-.03-.91-.046-1.371-.046-.391 0-.747.036-1.072.1a14.771 14.771 0 01-1.09-1.21c.546-.57 1.19-1.123 1.893-1.643l.967.668-.316-1.128c.297-.2.603-.394.914-.58l1.434.73-.673-1.162c.198-.106.398-.21.598-.31l2.007 1.346-.66-1.952a15.32 15.32 0 012.034-.667zm3.492 1.105h2.22l-1.084.715zM4.153 14.675c.273.337.577.678.91 1.021a4.104 4.104 0 00-2.007 1.316c-.629.76-.962 1.762-.886 2.622H.495c.337-.728 1.677-2.833 3.658-4.959z"/></svg>`,
    styles: []
})
export class SimpleIconsApachetomcatComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F8DC75';
    @Input() className: string = 'simple-icons-apachetomcat'
    constructor() {}
    ngOnInit(): void {}
}
