import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';

import json_16 from '../jsons/2016.json';
import json_17 from '../jsons/2017.json';
import json_18 from '../jsons/2018.json';
import json_19 from '../jsons/2019.json';
import json_20 from '../jsons/2020.json';
import json_21 from '../jsons/2021.json';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  imgs_16: any[] = json_16;
  imgs_17: any[] = json_17;
  imgs_18: any[] = json_18;
  imgs_19: any[] = json_19;
  imgs_20: any[] = json_20;
  imgs_21: any[] = json_21;

  selected: any;
  year:any = 'all';


  constructor() { }

  ngOnInit(): void {
  }

  setOnModal(index, year): void {

    console.log(index,year);

    if (year === '2016') {
      this.imgs_16.forEach(image => {
        if (index === this.imgs_16.indexOf(image)) {
          this.selected = image;
          this.selected.index = index;
          this.selected.total = this.imgs_16.length;

        }
      });
    }
    if (year === '2017') {
      this.imgs_17.forEach(image => {
        if (index === this.imgs_17.indexOf(image)) {
          this.selected = image;
          this.selected.index = index;
          this.selected.total = this.imgs_17.length;

        }
      });
    }
    if (year === '2018') {
      this.imgs_18.forEach(image => {
        if (index === this.imgs_18.indexOf(image)) {
          this.selected = image;
          this.selected.index = index;
          this.selected.total = this.imgs_18.length;

        }
      });
    }
    if (year === '2019') {
      this.imgs_19.forEach(image => {
        if (index === this.imgs_19.indexOf(image)) {
          this.selected = image;
          this.selected.index = index;
          this.selected.total = this.imgs_19.length;


        }
      });
    }
    if (year === '2020') {
      this.imgs_20.forEach(image => {
        if (index === this.imgs_20.indexOf(image)) {
          this.selected = image;
          this.selected.index = index;
          this.selected.total = this.imgs_20.length;


        }
      });
    }
    if (year === '2021') {
      this.imgs_21.forEach(image => {
        if (index === this.imgs_21.indexOf(image)) {
          this.selected = image;
          this.selected.index = index;
          this.selected.total = this.imgs_21.length;


        }
      });
    }
  }

  filterByYear(year):void{
    this.year = year;
    this.scrollToContent();

  }

  scrollToContent(): void {
  // console.log('trying to scroll');
  // const element = document.getElementById('listing');
  //
  console.log();

  if (window.innerWidth <= 770) {
    const headerOffset = 200;
    const elementPosition = document.getElementById('listing').offsetTop;

    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });


  }
  else if (window.innerWidth > 770) {
    const elementPosition = document.getElementById('listing').offsetTop;
    const headerOffset = 250;

    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}




}
