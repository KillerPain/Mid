import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { IComment } from 'app/components/comment/comment.model';
import { CommentService } from 'app/components/comment/comment.service';
import { CommentComponent } from 'app/components/comment/comment.component';

@Component({
  selector: 'm-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @ViewChild('comment', {read: ViewContainerRef })
  private postContainer: ViewContainerRef ;
  content: string = "";
  constructor(private service: CommentService, private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onCreate() {
    const factory = this.cfr.resolveComponentFactory(CommentComponent);    
    const componentRef = this.postContainer.createComponent(factory);
    componentRef.instance.content = this.content;
    
  }

}
