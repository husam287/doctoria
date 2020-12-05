import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
           
}
$('.dropdown-menu li').on('click', function() {
        var getValue = $(this).text();
        $('.dropdown-select').text(getValue);
});
 
 
