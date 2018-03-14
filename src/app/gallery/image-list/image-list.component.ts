import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: Image[] = [];
  selectedImage: Image;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image) {
    this.selectedImage = image;
  }
}
 
