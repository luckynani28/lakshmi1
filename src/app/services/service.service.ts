import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}
private baseUrl = 'http://192.168.1.9:8080/';
  getAdImg(): Observable<any> {
    return this.http.get(this.baseUrl + 'getadimg');
  }

  getGallery(p): Observable<any> {
    return this.http.get(this.baseUrl + 'getgallarydata/' + p);
  }
  getthumbGallery(): Observable<any> {
    return this.http.get(this.baseUrl + ' getthumbimgs');
  }
  getVideos(P): Observable<any> {
    return this.http.get(this.baseUrl + 'getvideoimg/' + P);
  }
  getVideosthumb(): Observable<any> {
    return this.http.get(this.baseUrl + 'getviedothumbnail');
  }
  getUpcomingImg(): Observable<any> {
    return this.http.get(this.baseUrl + 'getupcomingimage');
  }
  getUpdatesthumb(): Observable<any> {
    return this.http.get(this.baseUrl + 'getupdates');
  }
  getUpdates(p): Observable<any> {
    return this.http.get(this.baseUrl +  'getupdatedata/' + p);
  }
  getArticles(p): Observable<any> {
    return this.http.get(this.baseUrl + 'getarticledata/' + p);
  }
  getArticlesData(heading): Observable<any> {
    return this.http.get(this.baseUrl + 'getarticlefilter/' + heading);
  }
  gethotposts(): Observable<any> {
    return this.http.get(this.baseUrl + 'gethotposts');
  }
  getUpdateData(heading): Observable<any> {
    return this.http.get(this.baseUrl +  'getUpdatefilter/' + heading);
  }
  getFilterImg(title): Observable<any> {
    return this.http.get(this.baseUrl +  'getfilterimg/' + title);
  }


}
