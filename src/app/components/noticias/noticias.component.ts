import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/notice.interface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() notices: Article[] = [];

  constructor() { }

  ngOnInit() { }

}
