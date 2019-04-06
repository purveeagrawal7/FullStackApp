import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [DataService]
})
export class TodoComponent implements OnInit {
  itemList: Item[] = [];
  selectedItem: Item;
  constructor(private dataservice: DataService) { }

  getItem() {
    this.dataservice.getTodoItems().subscribe(
      items => {
        this.itemList = items;
      }
    );
       // console.log(form.value);
  }

  addItem(form) {
    let newItem: Item = {
      itemName: form.value.itemName,
      itemDone: false
    }
    this.dataservice.addtodoItem(newItem).subscribe(
      result => {
        console.log(result);
        this.getItem();
      }
    );
       // console.log(form.value);
  }
  updateCheckBox(Item) {
    Item.itemDone = !Item.itemDone;
    console.log(Item);
    this.dataservice.updatetodoItem(Item)
    .subscribe(
      result =>{
        console.log(result);
        this.getItem();
      }
    );
  }
  deleteItem(id) {
    this.dataservice.deletetodoItem(id)
    .subscribe(
      result => {
        if (result.n === 1) {
          for (let i = 0; i < this.itemList.length; i++) {
            if (id === this.itemList[i]._id) {
              this.itemList.splice(i, 1);
            }
          }
        }
      }
    );
  }
  ngOnInit() {
    this.getItem();
  }

}
