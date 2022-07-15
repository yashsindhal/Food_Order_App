import { Component } from '@angular/core';
import { GetApiService } from './services/get-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor( private api:GetApiService){

}
ngOnInit(){
  this.api.apiCall().subscribe((data)=>{
    console.warn("get api data", data);
  })
}

}
