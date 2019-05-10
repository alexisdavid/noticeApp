import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../../interfaces/notice.interface';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  notices: Article[] = [];
  constructor(private getNotice: NoticiasService) { }


  ngOnInit() {
    this.cargarData();

  }
  loadData(event) {
    this.cargarData(event);

  }
  cargarData(event?) {
    this.getNotice.getTopHeadlines().subscribe(resp => {
      console.log('noticias', resp);
      if (resp.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;

      }
      this.notices.push(...resp.articles);
      if (event) {
        event.target.complete();
      }

    })
  }
}
