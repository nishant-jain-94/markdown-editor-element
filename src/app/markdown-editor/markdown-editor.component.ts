import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewEncapsulation, ElementRef } from '@angular/core';

const SimpleMDE: any = require('simplemde');

@Component({
  selector: 'custom-markdown-editor',
  template: `
  <mat-form-field>
    <textarea #markdown matInput placeholder="Enter Text"></textarea>
  </mat-form-field>
  `,
  styles: [
    '@import url("../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css");',
    '@import url("../../../node_modules/simplemde/dist/simplemde.min.css");',
    `.CodeMirror, .CodeMirror-scroll {
      min-height: 0px !important;
      padding-left: 0px;
    }',

    .CodeMirror {
      height: 100% !important;
      border: none;
      padding: 0px;
    }`,
  ],
  encapsulation: ViewEncapsulation.Native
})
export class MarkdownEditorComponent implements AfterViewInit {

  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();
  @ViewChild('markdown') markdownTextEditor: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const mde = new SimpleMDE({
      element: this.markdownTextEditor.nativeElement,
      showIcons: false,
      status: false,
      toolbar: false,
    });

    mde.codemirror.on('focus', () => {
      const editorElement = (this.markdownTextEditor.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      matFormFieldElement.classList.add('mat-focused');
    });

    mde.codemirror.on('blur', () => {
      const editorElement = (this.markdownTextEditor.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      matFormFieldElement.classList.remove('mat-focused');
    });

    mde.codemirror.on('change', () => {
      const value = mde.codemirror.getValue();
      this.modelChange.emit(value);
    });

    if (this.model) {
      mde.codemirror.setValue(this.model);
    }
  }

  ngOnInit() {
    console.log('Initializing Markdown Compoennt');
  }

}
