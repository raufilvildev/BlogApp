import { Component, WritableSignal, EventEmitter, signal, Output, ViewChild, ElementRef } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() newEmitted = new EventEmitter<INew>();
  @ViewChild("textarea") textarea!: ElementRef;
  new: INew = {
    title:      "",
    subtitle:   "",
    imgUrl:     "",
    imgCaption: "",
    author:     "",
    date:       "",
    contentNew: ""
  }
  isHidden: WritableSignal<boolean> = signal(true);
  occultOrShowCreateNew(): void {
    this.isHidden.set(!this.isHidden);
  }
  updateContent(event: any): void {
    const textarea: any = event.target;
    this.new.contentNew = textarea.innerHTML;
    if (textarea.innerHTML?.trim() === "") {
      textarea.innerHTML = "";
    }
  }
  addNew(): void {
    console.log(this.new);
    const isThereAnyEmptyProperty: boolean = Object.values(this.new).some(value => value === "");
    if (isThereAnyEmptyProperty) {
      alert("Por favor, complete los campos vacíos.");
    } else {
      this.newEmitted.emit(this.new);
      this.new = {
        title:      "",
        subtitle:   "",
        imgUrl:     "",
        imgCaption: "",
        author:     "",
        date:       "",
        contentNew: ""
      }
      this.textarea.nativeElement.innerHTML = "";
    }
  }
}
