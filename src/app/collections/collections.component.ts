import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

  mainImageUrl ='/image/download.jpeg'
  Image1Url='image/download.jpeg'
  Image2Url='/image/images (1).jpeg'
  Image3Url='/image/images (2).jpeg'
  Image4Url='/image/images.jpeg'

  changeMainImage (imageUrl : string) {
    this.mainImageUrl = imageUrl
}

count = 0

decrement (){
  this.count--
}
increment (){
  this.count++
}

}
