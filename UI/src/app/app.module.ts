import { AuthModule } from './auth/auth.module';
import { AppRoutes } from './app.routing';
import { HomeModule } from './home/home.module';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GrowlModule, MessagesModule, MenubarModule } from 'primeng/primeng';
import { Auth } from "app/auth/auth.service";
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AlertService } from "app/alert.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('access_token'))
    }), http, options);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MessagesModule,
        GrowlModule,
        MenubarModule,
        StoreModule,
        FormsModule,
        HttpModule,
        AppRoutes,
        HomeModule,
        AuthModule],
    providers: [
        AlertService,
        Auth,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
