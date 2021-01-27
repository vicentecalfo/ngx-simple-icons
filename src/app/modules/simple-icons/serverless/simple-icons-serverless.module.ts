import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsServerlessComponent } from './simple-icons-serverless.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsServerlessComponent ],
    exports:      [ SimpleIconsServerlessComponent ],
    bootstrap:    []
})
export class SimpleIconsServerlessModule {}
