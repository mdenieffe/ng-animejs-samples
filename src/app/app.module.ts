import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageLoaderComponent } from './animation/image-loader/image-loader.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { RotationComponent } from './rotation/rotation.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageLoaderComponent,
    ImageViewerComponent,
    RotationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
