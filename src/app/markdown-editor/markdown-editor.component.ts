import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewEncapsulation, ElementRef } from '@angular/core';

const SimpleMDE: any = require('simplemde');

@Component({
  selector: 'quizetency-markdown-editor',
  template: `
  <form>
    <mat-form-field>
      <textarea #markdown matInput name="text" placeholder="Question" cdkTextareaAutosize cdkAutosizeMinRows="2"></textarea>
    </mat-form-field>
  </form>
  `,
  styleUrls: [
    "../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
    "../../../node_modules/simplemde/dist/simplemde.min.css",
    "./markdown-editor.component.css",
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MarkdownEditorComponent implements AfterViewInit {

  @Input() text: string;
  @Output() onTextChanged = new EventEmitter<string>();
  @ViewChild('markdown') markdownTextEditor: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const mde = new SimpleMDE({
      autofocus: false,
      element: this.markdownTextEditor.nativeElement,
      showIcons: false,
      status: false,
      forceSync: true,
      toolbar: false,
    });

    mde.codemirror.options.extraKeys['Tab'] = false;
    mde.codemirror.options.extraKeys['Shift-Tab'] = false;

    mde.codemirror.on('focus', () => {
      const editorElement = (this.markdownTextEditor.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      matFormFieldElement.classList.add('mat-focused');
      matFormFieldElement.classList.add('mat-form-field-should-float');
    });

    mde.codemirror.on('blur', () => {
      const editorElement = (this.markdownTextEditor.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      matFormFieldElement.classList.remove('mat-focused');
      matFormFieldElement.classList.remove('mat-form-field-should-float');
    });

    mde.codemirror.on('change', () => {
      const value = mde.codemirror.getValue();
      this.onTextChanged.emit(value);
    });

    if (this.text) {
      console.log(this.text);
      mde.codemirror.setValue(this.text);
    }
  }

  ngOnInit() {}
}
