import { Component, WritableSignal, EventEmitter, signal, Output, ViewChild,ElementRef } from '@angular/core';
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
  hiddenStatus: boolean = true;
  hidden: WritableSignal<string> = signal("hidden");
  occultOrShowCreateNew(): void {
    if (this.hiddenStatus) {
      this.hidden.set("")
    } else {
      this.hidden.set("hidden");
    }
    this.hiddenStatus = !this.hiddenStatus;
  }
  addNew(): void {
    // Comprobamos si existe alguna propiedad vacia. En caso contrario, 
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
    }
  }
}
