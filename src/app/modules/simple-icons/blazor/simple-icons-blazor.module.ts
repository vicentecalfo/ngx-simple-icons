import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsBlazorComponent } from './simple-icons-blazor.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsBlazorComponent ],
    exports:      [ SimpleIconsBlazorComponent ],
    bootstrap:    []
})
export class SimpleIconsBlazorModule {}
