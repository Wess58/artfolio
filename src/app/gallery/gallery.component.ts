import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';

import json_16 from '../jsons/2016.json';
import json_17 from '../jsons/2017.json';
import json_18 from '../jsons/2018.json';
import json_19 from '../jsons/2019.json';
import json_20 from '../jsons/2020.json';
import json_21 from '../jsons/2021.json';
import json_22 from '../jsons/2022.json';



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
    ]),
    trigger('fadeInSmooth', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ transform: 'scale(0.8)' }),
        animate('0.55s ease-in-out', style({ transform: 'scale(1)' }))
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
  imgs_22: any[] = json_22;
  jointArrays: any;

  selected: any;
  year: any = 'all';


  constructor() { }

  ngOnInit(): void {

    this.jointArrays = this.imgs_16.concat(this.imgs_17, this.imgs_18, this.imgs_19, this.imgs_20, this.imgs_21,this.imgs_22);
    // console.log(this.jointArrays);

  }

  setOnModal(imageUrl: any): void {
    // console.log(index,year);

    this.jointArrays.forEach(image => {
      if (imageUrl === image.image_url) {
        this.selected = image;
        this.selected.index = this.jointArrays.indexOf(image);
        this.selected.total = this.jointArrays.length;
      }
    });
  }

  filterByYear(year): void {
    this.year = year;
    this.scrollToContent();

  }

  scrollToContent(): void {
    // console.log('trying to scroll');
    // const element = document.getElementById('listing');
    //
    // console.log();

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


  moveImg(i): void {
    console.log(i);

    if (i <= (this.jointArrays.length - 1) && i >= 0) {
      this.selected = {};

      this.selected = this.jointArrays[i];
      this.selected.index = i;
      this.selected.total = this.jointArrays.length;
    }
  }




}
