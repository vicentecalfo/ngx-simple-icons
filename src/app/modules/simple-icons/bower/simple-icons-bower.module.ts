import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsBowerComponent } from './simple-icons-bower.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsBowerComponent ],
    exports:      [ SimpleIconsBowerComponent ],
    bootstrap:    []
})
export class SimpleIconsBowerModule {}
