import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  data = { "dataSet": "ClqDdQZ4rOH", "completeData": "2018-02-04", "period": "201709", "orgUnit": "aLYZQnWyN1f", "dataValues": [{ "dataElement": "RX6vJjY1Za8", "value": "1670" }] }
  
  private headers = new Headers({ 'Content-Type': 'application/json' });
  datasUrl = "http://localhost:8080/dhis/api/dataValueSets/?username=admin&password=district";
  constructor(private http: Http) { }

 // getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
 //   this.messageService.add('HeroService: fetched heroes');
  //  return of(HEROES);
//  }
  putData(): Promise<any> {
    return this.http
      .put(this.datasUrl, this.data,{ headers: this.headers })
      .toPromise()
      .then(() => this.data)
      .catch(this.handleError);
  }

  getData(): Promise<any> {
    return this.http
      .get(this.datasUrl, { headers: this.headers })
      .toPromise()
      .then(() => this.data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
