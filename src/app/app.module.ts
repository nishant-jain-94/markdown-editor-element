import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

@NgModule({
  declarations: [MarkdownEditorComponent],
  imports: [BrowserModule],
  entryComponents: [MarkdownEditorComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const markdownEditorElement = createCustomElement(MarkdownEditorComponent, { injector });
    customElements.define('custom-markdown-editor', markdownEditorElement);
  }

  ngDoBootstrap() {}
}
