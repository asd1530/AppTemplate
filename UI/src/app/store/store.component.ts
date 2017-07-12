import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Item } from './item';
import { StoreService } from "app/store/store.service";
import { AlertService } from "app/alert.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [StoreService]
})
@Injectable()
export class StoreComponent implements OnInit {
    items: Item[];
    selectedItem: Item;
    
    displayDialog: boolean;
    constructor(private storeService: StoreService, private alertService: AlertService) { }

    ngOnInit() {
        this.storeService.listItems().subscribe(
            items => this.items = items,
            err => this.alertService.error(err.status+ ' ' + err.statusText,true)
        );
        
    }
    selectItem(item: Item) {
        this.selectedItem = item;
        this.displayDialog = true;
    }
    onDialogHide() {
        this.selectedItem = null;
    }

}
