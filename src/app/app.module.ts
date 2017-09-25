import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { NgUploaderModule } from 'ngx-uploader';
import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, FileSelectDirective
  ],
  imports: [
    BrowserModule, NgUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
