import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsWebpackComponent } from './simple-icons-webpack.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsWebpackComponent ],
    exports:      [ SimpleIconsWebpackComponent ],
    bootstrap:    []
})
export class SimpleIconsWebpackModule {}
