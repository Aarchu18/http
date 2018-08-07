import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import{EmpServiceService} from './emp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
