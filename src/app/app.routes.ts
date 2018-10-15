import { Component } from '@angular/core';


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GallerythumbComponent } from './gallerythumb/gallerythumb.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { UpdatesComponent } from './updates/updates.component';
import { ArticlesComponent } from './articles/articles.component';
import { ModelimageComponent } from './modelimage/modelimage.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'modelimage', component: ModelimageComponent },

  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
