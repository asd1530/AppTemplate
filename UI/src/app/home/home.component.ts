import { Component, OnInit } from '@angular/core';
import { AlertService } from "app/alert.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private alertService: AlertService) { }

  ngOnInit() {
      
    }
  showmsg() {
      this.alertService.success('sssss');
  }

}
