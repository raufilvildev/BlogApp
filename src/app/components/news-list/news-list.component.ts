import { Component, Input, Output, EventEmitter } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-news-list',
  imports: [],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  @Input() arrNews: INew[] = [];
  @Output() newEmitted = new EventEmitter<INew>();
  showNew(selectedNew: INew): void {
    this.newEmitted.emit(selectedNew);
  }
}
