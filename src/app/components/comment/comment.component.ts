import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  
  content: string;
  
  constructor() { }

  ngOnInit() {
  }

}
