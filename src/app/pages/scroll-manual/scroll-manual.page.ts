import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { listItems } from '../../costants/images';

@Component({
  selector: 'app-scroll-manual',
  templateUrl: './scroll-manual.page.html',
  styleUrls: ['./scroll-manual.page.scss'],
})
export class ScrollManualPage implements OnInit {
  listImages;
  isLoading: boolean[] = [];

  constructor(
    public api: ApiService,
  ) { }

  ngOnInit() {
    this.listImages = listItems;
    this.listImages.map(
      (value, index) => {
        if (index < 10) {
          this.isLoading.push(false);
        }
        this.isLoading.push(true);
      }
    );
    this.api.getListImages().subscribe(
      (data)=> {
        // this.listImages = data;
        console.log('data: ', data);
      },
      (error) => { console.error(error); }
    );
  }

  endLoad(index: number){
    this.isLoading[index] = false;
  }

  willLoad(index: number){
    this.isLoading[index] = true;
  }

}
