import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsStorybookComponent } from './simple-icons-storybook.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsStorybookComponent ],
    exports:      [ SimpleIconsStorybookComponent ],
    bootstrap:    []
})
export class SimpleIconsStorybookModule {}
