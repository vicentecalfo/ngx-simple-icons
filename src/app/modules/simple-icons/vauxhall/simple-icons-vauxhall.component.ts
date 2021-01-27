import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-vauxhall',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vauxhall icon</title><path d="M21.406 17.386a7.137 7.137 0 0 1-.053.095.074.074 0 0 1-.092.032c-.1-.041-.298-.122-.35-.145a31.433 31.433 0 0 1-2.864-1.396c-.799-.432-1.25-1.066-1.39-1.947a14.221 14.221 0 0 1-.166-2.908c.014-.286.142-.493.431-.556.235-.051.409-.071.714-.105.421-.03.844-.041 1.265-.062.247-.01.284-.1.175-.312-.123-.24-.3-.369-.582-.429-.307-.065-1.104-.185-1.161-.254a.068.068 0 0 1-.009-.075c.035-.062.128-.07.186-.078a8.908 8.908 0 0 1 2.043-.04c.282.025.49.167.618.423.047.096.091.194.14.29.023.04.038.07.067.115.019.03.061.035.085.009.031-.034.06-.082.118-.244.165-.534.274-.946.212-1.515-.052-.474-.282-.828-.73-1a86.323 86.323 0 0 0-1.295-.387c0-.08-.004-.165 0-.248a.842.842 0 0 0-.401-.772c-.343-.205-.753-.315-1.148-.383-.35-.06-.662-.09-1.417-.117.092-.587.308-1.91.308-1.91.009-.053-.016-.066-.057-.03L13.802 5.54c-.038.023-.36.095-.578.148-.824.18-1.567.696-2.083 1.424-.092.131-.181.267-.27.404h.001c-.075.115-.151.231-.231.347a.124.124 0 0 0 .08.193c.195.032.353.046.544.079.057.01.046.047.031.075-.07.121-.238.167-.326.194-.215.068-.3.093-.48.151a1.067 1.067 0 0 0-.534.417c-.39.54-.722 1.114-1.04 1.697-.047.085-.093.159-.13.245a.109.109 0 0 0 0 .098c.056.096.18.084.297.092.199.012.29.011.484.025a.397.397 0 0 1 .082.013c.028.01.03.03.034.048.014.087-.046.124-.112.157-.09.043-.187.074-.28.113-.239.104-.48.204-.717.314 0 0-.296.103-.572.681-.275.579-.811 1.647-1.025 2.22-.06.16-.011.226.16.239.255.02.381.025.636.04l.25.018c.06.006.061.024.035.138 0 0-.066.29-.138.477-.021.05-.015.086-.163.087L3.54 15.66c-.405-.024-.657-.076-.916-.178a4.707 4.707 0 0 1-.532-.252c-.325-.178-.483-.325-.52-.372-.036-.047-.07-.203-.07-.203l-.011-.036c-.2-.826-.314-1.662-.315-2.513v-.12c.002-.096.033-.14.138-.14h4.872c.197.001.32-.08.413-.244L9.91 5.78a.137.137 0 0 0-.118-.204s-4.736.005-6.316 0a.093.093 0 0 1-.08-.044.104.104 0 0 1 .01-.107c.17-.22.344-.439.532-.644 1.674-1.84 3.712-3.036 6.173-3.457 3.39-.58 6.535.323 9.154 2.65 1.881 1.672 2.997 3.717 3.428 6.268.434 2.571-.03 4.829-1.287 7.144M16.348 7.077c.018-.052.377-.244.377-.244a.442.442 0 0 1 .21-.026l1.1.147c.06.01.073.052.028.094l-.305.346a.402.402 0 0 1-.19.089l-.02.002a.637.637 0 0 1-.215-.016l-.911-.266c-.058-.017-.092-.074-.074-.126M8.944 20.533l-.003.004-1.52 1.227c-.04.036-.1 0-.1 0-1.695-.825-3.028-1.944-4.147-3.49 0-.002-.006-.01-.006-.014a.02.02 0 0 1 .02-.02l.007.002 4.84 1.146.015.004a.116.116 0 0 1 .075.069c.188.39.818 1.016.819 1.017a.04.04 0 0 1 0 .056M3.827 6.606c.139.001.153.022.194.203.117.506.661 2.867.684 2.946.054-.09 1.173-2.04 1.694-2.967.073-.13.154-.184.308-.182h1.22l-2.378 4.2c-.53-.007-1.497.007-2.028.005l-.964-4.205s.915-.003 1.27 0M11.987 0c-3.233.017-6.255 1.281-8.51 3.56A11.936 11.936 0 0 0 0 11.935a11.925 11.925 0 0 0 3.503 8.535A11.91 11.91 0 0 0 12.014 24h.011c6.61-.013 11.98-5.4 11.975-12.011a11.92 11.92 0 0 0-3.493-8.45C18.244 1.265 15.218.01 11.987 0"/></svg>`,
    styles: []
})
export class SimpleIconsVauxhallComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EB001E';
    @Input() className: string = 'simple-icons-vauxhall'
    constructor() {}
    ngOnInit(): void {}
}