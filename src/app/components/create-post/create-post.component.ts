import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post_title: string;
  post_content: string;
  publish_status: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  createPost() {

    let post_data = {
      title: this.post_title,
      postContent: this.post_content
    }

    alert(this.publish_status);

    this.blogService.createPost(post_data).subscribe(data => {
      console.log(data);
    });

  }
}
