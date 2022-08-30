import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersDataService } from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // rows=[
  //   {
  //     "id": "1",
  //     "bill_no": "ark",
  //     "bill_date": "2022-08-25T18:30:00.000Z",
  //     "hoa": "hoa---",
  //     "gross_amount": "100",
  //     "net_amount": "90",
  //     "bt_amount": "10",
  //     "sub_detail_head": "ark"
  // },
  // {
  //     "id": "2",
  //     "bill_no": "ark",
  //     "bill_date": "2022-08-25T18:30:00.000Z",
  //     "hoa": "hoa---",
  //     "gross_amount": "100",
  //     "net_amount": "90",
  //     "bt_amount": "10",
  //     "sub_detail_head": "ark"
  // },
  // {
  //     "id": "3",
  //     "bill_no": "ark",
  //     "bill_date": "2022-08-25T18:30:00.000Z",
  //     "hoa": "hoa---",
  //     "gross_amount": "100",
  //     "net_amount": "90",
  //     "bt_amount": "10",
  //     "sub_detail_head": "ark"
  // }
  // ] 
  rows: any;
  title: any;
  headers: any;
  constructor(private UsersDataService: UsersDataService) {

  }
  ngOnInit(): void {
    this.title = "table";
    this.headers = ["id", "bill_no", "bill_date", "hoa", "gross_amount", "net_amount", "bt_amount", "sub_detail_head"];
    this.UsersDataService.show("http://10.176.100.29:3000/eTrsyNode/api/tmp/wbFetchBillSummary", '{"body": "eA3WATm74UYJd5otcJCRUQ=="}').subscribe((resp) => {
      // console.warn("data",resp);

      console.log(resp.data[0]);

      this.rows = resp.data[0];
      console.log(this.rows);
    });
    //console.log(this.rows);
  }

}
