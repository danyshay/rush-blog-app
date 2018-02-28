import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Core Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Custom Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';

// Extra Library Components
import { QuillModule } from 'ngx-quill';


// Reference for Config Namespaces
/// <reference path="../configs/commonConfigs.ts">

// Services
import { BlogService } from './services/blog.service';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminCreatePostComponent } from './components/admin/admin-create-post/admin-create-post.component';

// Routes
const appRoot: Routes = [
  { path: 'post/create', component: CreatePostComponent },
  { path: 'all', component: ListBlogComponent },
  { path: 'admin', component: AdminCreatePostComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SingleBlogComponent,
    CreatePostComponent,
    UpdatePostComponent,
    ListBlogComponent,
    AdminSidebarComponent,
    AdminCreatePostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoot),
    FormsModule,
    HttpModule,
    QuillModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
