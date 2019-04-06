import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//to map response to json
@Injectable()
export class DataService {
  constructor(private http: Http) { }
  getTodoItems() {
    return this.http.get('http://localhost:3000/items')
    .map(res => res.json());
  }
  addtodoItem(newItem) {
    let headers = new Headers();
    //to get request object
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/item', newItem, {headers: headers})
    .map(res => res.json());
  }
  updatetodoItem(newItem) {
    let headers = new Headers();
    //to get request object
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/item/' + newItem.id, {headers: headers})
    .map(res => res.json());
  }
  deletetodoItem(id) {
    return this.http.delete('http://localhost:3000/item/' + id)
    .map(res => res.json());
  }
}
