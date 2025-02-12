import { Component, Input } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
@Component({
  selector: 'app-new',
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  @Input() new: INew = {
    title:      "",
    subtitle:   "",
    imgUrl:     "",
    imgCaption: "",
    author:     "",
    date:       "",
    contentNew: ""
  }
  formatDate(inputDate: string): string | void {
    if (inputDate !== "") {
      const splittedDate = inputDate.split("-")
      return (inputDate.includes("-")) ? `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}` : inputDate;
    }
  }
}
