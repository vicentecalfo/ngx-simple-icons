# @vicentecalfo/ngx-simple-icons
This package provides the [Simple Icons](https://github.com/simple-icons/simple-icons) packaged as a set of Angular components.

## Installation
First you need to install the npm module.
```
npm install @vicentecalfo/ngx-simple-icons
```

## Usage
### 1. Import the icon module
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Simple Icons Gatsby
import { SimpleIconsGatsbyModule } from '@vicentecalfo/ngx-simple-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleIconsGatsbyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
### 2. Use the component

```html
// Selector anatomy
/*
* Rules for icon slug:
* -> All words in lowercase;
* -> No space between words;
* -> If the name has a period, replace it with -dot- (Ferrari N.V. -> ferrarin-dot-v-dot).
*/

<simple-icons-[ICON-SLUG]></simple-icons-[ICON-SLUG]>

<simple-icons-ferrarin-dot-v-dot></simple-icons-ferrarin-dot-v-dot>

```

```html
<simple-icons-gatsby></simple-icons-gatsby>
```

#### 2.1 Change Styles

```html
// size
<simple-icons-gatsby size="50px"></simple-icons-gatsby>

// color
<simple-icons-gatsby color="#cc0000"></simple-icons-gatsby>
```
## Note
Versioning follows the [Simple Icons](https://github.com/simple-icons/simple-icons) package.
