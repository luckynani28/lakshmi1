import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VideosComponent } from './videos/videos.component';
import { UpcomingmoviesComponent } from './upcomingmovies/upcomingmovies.component';
import { UpdatesComponent } from './updates/updates.component';
import { GallerythumbComponent } from './gallerythumb/gallerythumb.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { VideosthumbComponent } from './videosthumb/videosthumb.component';
import { UpdatesthumbComponent } from './updatesthumb/updatesthumb.component';
import { ModelimageComponent } from './modelimage/modelimage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsComponent,
    GalleryComponent,
    VideosComponent,
    UpcomingmoviesComponent,
    UpdatesComponent,
    GallerythumbComponent,
    NavigationbarComponent,
    HomeComponent,
    ArticlesComponent,
    VideosthumbComponent,
    UpdatesthumbComponent,
    ModelimageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
