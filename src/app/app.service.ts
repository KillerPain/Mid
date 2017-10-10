import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IPost } from 'app/components/post/post.model';

@Injectable()
export class AppService {
  private like = new Subject<number>();
  public likes = this.like.asObservable();

  constructor() { }
}
