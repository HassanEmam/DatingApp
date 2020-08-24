import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  public myvalues: any;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
    console.log(this.myvalues);
  }

  async getValues() {
    this.http.get('http://127.0.0.1:5000/api/values').subscribe( response => {
      this.myvalues = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
