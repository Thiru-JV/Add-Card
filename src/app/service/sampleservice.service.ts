import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
  private sendDataToComSub = new Subject<String>();
  public sendDataToComSub$ = this.sendDataToComSub.asObservable();

  constructor() { 
    
  }
  public setData(data: any){
    this.sendDataToComSub.next(data);
  }
}
