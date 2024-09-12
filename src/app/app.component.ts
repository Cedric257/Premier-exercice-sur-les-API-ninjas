import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  data:any;
  constructor(private apiService:ApiService) {}
  loadData(){
    this.apiService.getData().subscribe(
      response=> {
        this.data=response;
        console.log(this.data);
      },
      error => {
           console.log('Error fecting data', error)
      }
    )
  }

}
