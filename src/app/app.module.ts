import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

@NgModule({
  declarations: [MarkdownEditorComponent],
  imports: [ BrowserModule, MatInputModule, FormsModule, BrowserAnimationsModule ],
  entryComponents: [MarkdownEditorComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const markdownEditorElement = createCustomElement(MarkdownEditorComponent, { injector });
    customElements.define('custom-markdown-editor', markdownEditorElement);
  }

  ngDoBootstrap() {}
}
