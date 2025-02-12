import { Component, WritableSignal, EventEmitter, signal, Output } from '@angular/core';
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
