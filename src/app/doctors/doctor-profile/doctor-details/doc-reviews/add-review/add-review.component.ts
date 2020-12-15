import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit,OnDestroy {
  @ViewChild('closeButton') closeButton:ElementRef;
  choosedRate:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.closeButton.nativeElement.click();
  }

  changeRate(review:number){
    if(this.choosedRate) return;
    for (let index = 0; index <= review; index++) {
      document.getElementById('star'+index).classList.add("text-warning")
    }
  }

  removeRate(){
    if(this.choosedRate) return;

    for (let index = 0; index <= 4; index++) {
      document.getElementById('star'+index).classList.remove("text-warning")
    }
  
  }

}
