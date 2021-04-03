import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  list:any;
  name: any;
  state_list: any;
  country_name:any;
  state_list_length:any;
  flag_list:any

  constructor(private httppreq: HttpDataService) { }

  ngOnInit(): void {
    
    this.httppreq.getData().subscribe((res:any) => {
       this.list = res.countries;
    })
  }

  getFlagList(data:any) {
    this.httppreq.postData(environment.flagApiURL, data).subscribe((res:any) => {
      this.flag_list = res.data.flag;
    })
  }

  getCountryList(value:any) {
     let createData = {'country': value}
     this.httppreq.postData(environment.baseURL, createData).subscribe((res:any) => {
      this.state_list = res.data.states;
      this.state_list_length = this.state_list.length
    })
   
    this.getFlagList(createData);
  }

  getClickedCountry(value:any) {
      this.country_name = value
      this.getCountryList(value);
  }

  getSearchedCountryList(value:any) {
       this.list = this.list.filter((item:any) => console.log("test", item.country.country_name.includes(value.target.value.toUpperCase())))
       console.log("test", this.list);
  }
  
}
