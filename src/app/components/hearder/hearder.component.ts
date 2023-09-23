import { Component } from '@angular/core';
import { SampleserviceService } from 'src/app/service/sampleservice.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent {
  data1:any='';
  headerImg:string='https://static.wixstatic.com/media/84b06e_717d310324e54451a0195d5658c70004~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_717d310324e54451a0195d5658c70004~mv2.png';

  constructor(private sampleserive:SampleserviceService){
    this.sampleserive.sendDataToComSub$.subscribe((data:any)=>{
      this.data1=data;
      console.log(this.data1);
    })
  }
}
