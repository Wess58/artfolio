import { Component, OnInit } from '@angular/core';
import json_16 from '../jsons/2016.json';
import json_17 from '../jsons/2017.json';
import json_18 from '../jsons/2018.json';
import json_19 from '../jsons/2019.json';
import json_20 from '../jsons/2020.json';
import json_21 from '../jsons/2021.json';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imgs_16: any[] = json_16;
  imgs_17: any[] = json_17;
  imgs_18: any[] = json_18;
  imgs_19: any[] = json_19;
  imgs_20: any[] = json_20;
  imgs_21: any[] = json_21;

  selected: any;


  constructor() { }

  ngOnInit(): void {
  }

  setOnModal(index, year): void {
    if (year === '2016') {
      this.imgs_16.forEach(image => {
        if (index === this.imgs_16.indexOf(image)) {
          this.selected = image;
        }
      });
    }
    if (year === '2017') {
      this.imgs_17.forEach(image => {
        if (index === this.imgs_17.indexOf(image)) {
          this.selected = image;
        }
      });
    }
    if (year === '2018') {
      this.imgs_18.forEach(image => {
        if (index === this.imgs_18.indexOf(image)) {
          this.selected = image;
        }
      });
    }
    if (year === '2019') {
      this.imgs_19.forEach(image => {
        if (index === this.imgs_19.indexOf(image)) {
          this.selected = image;
        }
      });
    }
    if (year === '2020') {
      this.imgs_20.forEach(image => {
        if (index === this.imgs_20.indexOf(image)) {
          this.selected = image;
        }
      });
    }
    if (year === '2021') {
      this.imgs_21.forEach(image => {
        if (index === this.imgs_21.indexOf(image)) {
          this.selected = image;
        }
      });
    }
  }


}