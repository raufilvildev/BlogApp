import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewComponent } from './components/new/new.component';
import { INew } from './interfaces/inew.interface';

@Component({
  selector: 'app-root',
  imports: [FormComponent, NewsListComponent, NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogApp';
  arrNews: INew[] = [
    {
      title:      "Título de la noticia 1",
      subtitle:   "Subtítulo de la noticia 1",
      imgUrl:     "https://placehold.co/600x400",
      imgCaption: "Leyenda de la foto de la noticia 1",
      author:     "Autor de la noticia 1",
      date:       "10/02/2025",
      contentNew: `Lorem ipsum odor amet, consectetuer adipiscing elit. Mi tincidunt per eleifend nec vestibulum suscipit vitae et. Habitant donec nisi tristique magna lectus suspendisse. Cras eu risus sociosqu rhoncus maecenas sodales ac. Habitant mi imperdiet malesuada; ex montes interdum. Rhoncus maecenas in volutpat turpis ex tortor tincidunt dapibus. Taciti ullamcorper parturient ad duis venenatis conubia lorem.

Eleifend gravida suscipit dictum nisi potenti aliquam ligula blandit. Pretium tempus ridiculus litora commodo natoque phasellus nunc vehicula. Lobortis cursus dictum quis mattis tellus bibendum magnis. Nulla sem urna tempus praesent hac lobortis. Lectus per justo potenti montes sapien inceptos porta praesent metus. Arcu cras eu augue quis, senectus ex lacus hendrerit. Nisl himenaeos leo imperdiet malesuada sodales potenti id fusce.

Scelerisque sollicitudin sodales platea nec, netus nullam. Rutrum nullam purus ridiculus ligula interdum dolor auctor. Aliquam vel dolor fusce semper est magnis libero. Interdum eu viverra nec blandit a montes vivamus nulla tincidunt. Ut mollis elementum vestibulum ultricies vulputate egestas nulla. Aptent inceptos integer aliquet proin; eget cubilia. Tincidunt sollicitudin conubia id ac semper senectus gravida efficitur.

Diam euismod torquent lectus ex etiam donec facilisi inceptos. Inceptos duis nunc convallis etiam lectus interdum. Leo hendrerit maecenas scelerisque gravida venenatis egestas conubia litora. Bibendum purus montes egestas habitant ultrices iaculis tellus eu? Condimentum eros vehicula adipiscing id phasellus turpis suscipit. Mauris quam massa vehicula volutpat, condimentum varius congue at. Dapibus pretium magnis platea scelerisque laoreet leo elit auctor.

Feugiat nam sociosqu gravida integer leo taciti. Adipiscing eget sodales porta; felis libero aliquet. Morbi nulla ullamcorper auctor malesuada potenti quis. Nec facilisis pellentesque libero potenti dis ultrices, varius taciti arcu. In porta nam turpis fames cras justo luctus elementum. Mi convallis quisque non nascetur netus tincidunt aliquet class. Mollis accumsan bibendum velit elit varius arcu facilisis curabitur. Litora nibh malesuada taciti pretium ipsum montes. Torquent imperdiet integer eleifend id cubilia neque. Placerat maximus nunc justo tristique nulla malesuada.`
    },
    {
      title:      "Título de la noticia 2",
      subtitle:   "Subtítulo de la noticia 2",
      imgUrl:     "https://placehold.co/1200x800",
      imgCaption: "Leyenda de la foto de la noticia 2",
      author:     "Autor de la noticia 2",
      date:       "11/02/2025",
      contentNew: `Lorem ipsum odor amet, consectetuer adipiscing elit. Mi tincidunt per eleifend nec vestibulum suscipit vitae et. Habitant donec nisi tristique magna lectus suspendisse. Cras eu risus sociosqu rhoncus maecenas sodales ac. Habitant mi imperdiet malesuada; ex montes interdum. Rhoncus maecenas in volutpat turpis ex tortor tincidunt dapibus. Taciti ullamcorper parturient ad duis venenatis conubia lorem.

Eleifend gravida suscipit dictum nisi potenti aliquam ligula blandit. Pretium tempus ridiculus litora commodo natoque phasellus nunc vehicula. Lobortis cursus dictum quis mattis tellus bibendum magnis. Nulla sem urna tempus praesent hac lobortis. Lectus per justo potenti montes sapien inceptos porta praesent metus. Arcu cras eu augue quis, senectus ex lacus hendrerit. Nisl himenaeos leo imperdiet malesuada sodales potenti id fusce.

Scelerisque sollicitudin sodales platea nec, netus nullam. Rutrum nullam purus ridiculus ligula interdum dolor auctor. Aliquam vel dolor fusce semper est magnis libero. Interdum eu viverra nec blandit a montes vivamus nulla tincidunt. Ut mollis elementum vestibulum ultricies vulputate egestas nulla. Aptent inceptos integer aliquet proin; eget cubilia. Tincidunt sollicitudin conubia id ac semper senectus gravida efficitur.

Diam euismod torquent lectus ex etiam donec facilisi inceptos. Inceptos duis nunc convallis etiam lectus interdum. Leo hendrerit maecenas scelerisque gravida venenatis egestas conubia litora. Bibendum purus montes egestas habitant ultrices iaculis tellus eu? Condimentum eros vehicula adipiscing id phasellus turpis suscipit. Mauris quam massa vehicula volutpat, condimentum varius congue at. Dapibus pretium magnis platea scelerisque laoreet leo elit auctor.

Feugiat nam sociosqu gravida integer leo taciti. Adipiscing eget sodales porta; felis libero aliquet. Morbi nulla ullamcorper auctor malesuada potenti quis. Nec facilisis pellentesque libero potenti dis ultrices, varius taciti arcu. In porta nam turpis fames cras justo luctus elementum. Mi convallis quisque non nascetur netus tincidunt aliquet class. Mollis accumsan bibendum velit elit varius arcu facilisis curabitur. Litora nibh malesuada taciti pretium ipsum montes. Torquent imperdiet integer eleifend id cubilia neque. Placerat maximus nunc justo tristique nulla malesuada.`
    }
  ];
  new: INew = {
    title:      "",
    subtitle:   "",
    imgUrl:     "",
    imgCaption: "",
    author:     "",
    date:       "",
    contentNew: ""
  }
  addNew(value:INew) {
    this.arrNews.push(value);
    this.new = value
  }
  showNew(value: INew) {
    this.new = value
  }
}
