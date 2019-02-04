// import { Component, OnInit } from '@angular/core';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
  export class ArticleComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'row';
    article: Article;
    // votes: number;
    // title: string;
    // link: string; 
    constructor() {
      this.article = new Article(
    // this.title = 'Angular';
    // this.link = 'http://angular.io';
    // this.votes = 10;
    'Angular',
    'http://angular.io',
   10);
    }
    voteUp() {
      this.article.votes += 1;
    // this.votes += 1;
    return false;
    }
    voteDown() {
      this.article.votes -= 1;
    // this.votes -= 1;
    return false;
    }
    ngOnInit() {
    }
  }
