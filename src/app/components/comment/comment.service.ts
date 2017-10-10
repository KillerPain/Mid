import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IComment } from 'app/components/comment/comment.model';

@Injectable()
export class CommentService {
  
  private post = new Subject<IComment>();
  public comment = this.post.asObservable();

  constructor() { }

  createComment(post: IComment) {
    this.post.next(post);
  }

}
