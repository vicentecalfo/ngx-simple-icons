import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-splunk',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Splunk icon</title><path d="M23.348 11.911l-2.241-1.091v-.65L24 11.621v.593l-2.893 1.438v-.636zm-5.397 1.841h-.961v-5.31h.961v3.116h.102l1.28-1.481.723.31-1.23 1.316 1.453 1.809-.888.311-1.44-1.996zm-2.577-.002v-2.068a2.685 2.685 0 0 0-.026-.42.791.791 0 0 0-.09-.26c-.113-.202-.308-.304-.59-.304a.888.888 0 0 0-.461.113.673.673 0 0 0-.286.33 1.012 1.012 0 0 0-.07.263c-.012.13-.019.262-.017.395v1.95h-.961v-3.614h.961l.002.485c.185-.2.373-.348.566-.437.192-.089.418-.134.673-.134.286 0 .527.058.721.177a1.016 1.016 0 0 1 .475.665 1.972 1.972 0 0 1 .054.448c.002.1.004.22.004.358v2.053zm-4.115.002l-.002-.485a1.783 1.783 0 0 1-.565.437 1.597 1.597 0 0 1-.674.135c-.285 0-.524-.057-.72-.17a.972.972 0 0 1-.425-.504.75.75 0 0 1-.054-.167 1.918 1.918 0 0 1-.033-.199 2.033 2.033 0 0 1-.017-.258 15.516 15.516 0 0 1-.005-.355V10.13h.956v2.07c-.003.141.006.282.026.42.015.092.045.18.09.26.113.204.308.306.59.306.36 0 .606-.15.74-.449.035-.082.06-.168.074-.257.017-.134.024-.269.022-.403v-1.95h.955v3.624zM7.184 8.44h.955v5.31h-.955zM5.759 11.9c0-.396-.08-.708-.24-.937a.759.759 0 0 0-.657-.345.804.804 0 0 0-.693.366c-.171.245-.256.574-.253.99 0 .405.084.723.25.957a.796.796 0 0 0 .69.347.685.685 0 0 0 .433-.135.985.985 0 0 0 .277-.34c.071-.14.121-.292.147-.448.03-.151.043-.3.046-.455m1.01-.036c.003.266-.04.532-.129.786-.082.23-.204.441-.364.626-.31.361-.764.567-1.24.563a1.67 1.67 0 0 1-.313-.028 1.041 1.041 0 0 1-.275-.098 1.33 1.33 0 0 1-.257-.178 2.379 2.379 0 0 1-.265-.268v2.293h-.929v-5.425h.93l.004.529c.169-.212.353-.368.55-.468.197-.1.426-.15.688-.147a1.509 1.509 0 0 1 1.156.507c.148.166.259.361.33.571.08.236.12.485.115.737m-4.21.89a.946.946 0 0 1-.102.441 1.007 1.007 0 0 1-.282.345c-.13.1-.275.173-.43.22a1.8 1.8 0 0 1-.546.08 1.985 1.985 0 0 1-.637-.097 1.964 1.964 0 0 1-.563-.32l.312-.505c.15.126.284.217.405.275.115.057.24.087.368.087a.557.557 0 0 0 .373-.12.396.396 0 0 0 .14-.322.475.475 0 0 0-.12-.318 1.306 1.306 0 0 0-.187-.173 9.231 9.231 0 0 0-.308-.232 6.787 6.787 0 0 1-.281-.21 2.11 2.11 0 0 1-.252-.232 1.039 1.039 0 0 1-.18-.275.826.826 0 0 1-.069-.347.893.893 0 0 1 .094-.409.935.935 0 0 1 .255-.314 1.22 1.22 0 0 1 .39-.203c.16-.05.327-.074.494-.072.184 0 .368.026.545.076.174.05.338.123.488.219l-.282.454a1.05 1.05 0 0 0-.608-.201.504.504 0 0 0-.323.102.307.307 0 0 0-.126.253c0 .098.041.193.113.26.074.078.203.186.385.325.185.136.336.253.457.355.104.085.202.182.286.286.065.08.115.173.145.273a.808.808 0 0 1 .046.299Z"/></svg>`,
    styles: []
})
export class SimpleIconsSplunkComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-splunk'
    constructor() {}
    ngOnInit(): void {}
}
