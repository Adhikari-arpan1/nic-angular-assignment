import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url="http://10.176.100.29:3000/eTrsyNode/api/tmp/wbFetchBillSummary";
  body='{"body": "eA3WATm74UYJd5otcJCRUQ=="}';

  constructor(private http:HttpClient) { }
  users()
    {
      return this.http.post(this.url, this.body);
    }

    show(url: string, payload: any): Observable<any>{
      return this.http.get(url, payload);
    }
  
  
}
