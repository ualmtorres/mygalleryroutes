import { Injectable } from '@angular/core';
import { Image } from './models/image';

@Injectable()
export class ImageService {
  images: Image[] = [
    {'imageURL':'https://images.pexels.com/photos/9051/pexels-photo.jpg?h=150', 'author':'Oliur Rahman', 'website':'http://photos.oliur.com'},
    {'imageURL':'https://images.pexels.com/photos/23475/pexels-photo.jpg?h=150', 'author':'Donald Tong', 'website':''},
    {'imageURL':'https://images.pexels.com/photos/9050/pexels-photo.jpg?h=150', 'author':'Pixabay', 'website':'http://pixabay.com'},
    {'imageURL':'https://images.pexels.com/photos/754998/pexels-photo-754998.jpeg?h=150', 'author':'Tarun Netha Amballa', 'website':''}
  ];
  constructor() { }

  getImages() {
    return this.images;
  }

}
