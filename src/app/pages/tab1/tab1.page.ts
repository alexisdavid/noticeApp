import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../../interfaces/notice.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  notices: Article[] = [];
  constructor(private getNotice: NoticiasService) { }


  ngOnInit() {
    this.getNotice.getTopHeadlines().subscribe(resp => {
      console.log('noticias', resp);
      this.notices.push(...resp.articles);

    })
  }
}
