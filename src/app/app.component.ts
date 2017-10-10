import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { PostComponent } from 'app/components/post/post.component';
import { IPost } from 'app/components/post/post.model';

@Component({
  selector: 'm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('post', {read: ViewContainerRef })
  private postContainer: ViewContainerRef ;

  title: string = "";
  author: string = "";
  content: string = "";

  constructor(private cfr: ComponentFactoryResolver, private service: AppService) {}

  ngOnInit() {}

  onCreate() {
    const factory = this.cfr.resolveComponentFactory(PostComponent);
    const componentRef = this.postContainer.createComponent(factory);
    componentRef.instance.title = this.title;
    componentRef.instance.author = this.author;
    componentRef.instance.content = this.content;
  }
}
