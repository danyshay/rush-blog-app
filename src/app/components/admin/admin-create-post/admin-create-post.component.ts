import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css']
})
export class AdminCreatePostComponent implements OnInit {

  post_title: string;
  post_content: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  createBlogPost() {

    let post_data = {
      title: this.post_title,
      postContent: this.post_content
    }

    this.blogService.createPost(post_data).subscribe(data => {
      console.log(data);
    });

  }

  test() {

      let post_data = {
      title: this.post_title,
      postContent: this.post_content
    }

    this.blogService.createPost(post_data).subscribe(data => {
      console.log(data);
    });
}


}
