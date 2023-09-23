import { Component } from '@angular/core';
import { cardData } from 'src/app/type/data';
import { cardtype } from 'src/app/type/type';
import { SampleserviceService } from 'src/app/service/sampleservice.service';
@Component({
  selector: 'app-cardnew',
  templateUrl: './cardnew.component.html',
  styleUrls: ['./cardnew.component.css']
})
export class CardnewComponent {
  cardDis: cardtype[] = cardData;
  fnp(data1: any) {

    this.cardDis.forEach((val: any) => {

      if (data1.heading == val.heading) {
        val.Qt++;
        console.log(val.kg);

      }
    })


  }
  fnm(data1: any) {
    this.cardDis.forEach((val: any) => {
      if (data1.heading == val.heading) {
        val.Qt--;

      }
    })

  }

  constructor(private sampleservice: SampleserviceService) {

  }
  arr: cardtype[] = [];
  sum: number = 0;
  AddCard(data1: any) {
    let st: number = 0;
    
    if (this.arr.length == 0) {
      this.arr.push(data1);
      console.log(data1);
      
      st = 1;

    }
    else {
      this.arr.forEach((val: any) => {
        if (val.heading == data1.heading) {
          val.Quantity = val.Quantity + data1.Quantity;
          st = 1;
          console.log(this.arr);

          

        }
      })
    }
    if (st == 0) {
      this.arr.push(data1);
      console.log(this.arr);
    }
    this.cardDis.forEach((val:any)=>{
      if(val.Qt > 0){
        this.sum = this.sum + (val.Qt * val.rs);
       
      }

    })
    this.sampleservice.setData(this.sum);
    
    this.sum = 0;

  }
}
