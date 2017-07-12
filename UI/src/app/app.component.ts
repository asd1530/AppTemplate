import { Component, Optional, OnInit } from '@angular/core';
import { Auth } from './auth/auth.service';
import { Message ,MenubarModule, MenuItem } from 'primeng/primeng';
import { AlertService } from './alert.service'

@Component({
  selector: 'app-mt',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {
    private items: MenuItem[];
    messages: Message[] = [];
    constructor(private auth: Auth, private alertService:AlertService) {
      
        this.auth.handleAuthentication();
    }
    ngOnInit() {
          this.alertService.getMessage().subscribe(message => {
            this.messages[0] = message;
        });
        this.items = [
            { label: 'Home', icon: 'fa-bar-chart', routerLink: ['home']},
            { label: 'Store', icon: 'fa-calendar', routerLink: ['store']},
            { label: 'Login', icon: 'fa-support', routerLink:['login'] }
            
        ];
        
       
    }
}

