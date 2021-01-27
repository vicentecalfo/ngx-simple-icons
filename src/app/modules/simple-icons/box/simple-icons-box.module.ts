import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsBoxComponent } from './simple-icons-box.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsBoxComponent ],
    exports:      [ SimpleIconsBoxComponent ],
    bootstrap:    []
})
export class SimpleIconsBoxModule {}
