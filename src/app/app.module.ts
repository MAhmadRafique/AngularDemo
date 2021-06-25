import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AdsenseModule } from 'ng2-adsense';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { MainComponent } from './main/main.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FunctionalitiesComponent,
    MainComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'functionalities',
        component: FunctionalitiesComponent,
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: MainComponent,
        pathMatch: 'full',
      },
      {
        path: 'todolist',
        component: ToDoListComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: '/main', pathMatch: 'full' },
    ]),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4194457390914226',
      adSlot: 1364163650,
    }),
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '41220580245-8324p31vi3hcl4uhc1mbre3oh8k0mteo.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
