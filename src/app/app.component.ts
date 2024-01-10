import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Photo Gallery';

  TableData:any
  TotalImages:number=0
  Pages:number=0
  SearchWord:string=''
  Pagenumber:number=1
  ItemsPerPage:number=5
  client_id='_lhDJVLYdOaEoNcZV1tmY3BtNCCuol-2Cq1vjwUxqRg'

  constructor(private http:HttpClient) { }

  search()
  {

  this.http.get('https://api.unsplash.com/search/photos?query='+this.SearchWord+',&page='+this.Pagenumber+',&per_page='+this.ItemsPerPage+',&client_id='+this.client_id+'').subscribe(

    (res:any)=>
    {
      const results='results' ; const total='total'; const total_pages='total_pages'

      this.TableData=res[results]
      this.TotalImages=res[total]
      this.Pages=res[total_pages]

    }
  )
  }

}
