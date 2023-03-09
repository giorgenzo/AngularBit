import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentsEverComponent } from './components/my-first-components-ever/my-first-components-ever.component';
import { StudentsComponent } from './components/students/students.component';
import { HobbyComponentComponent } from './components/hobby-component/hobby-component.component';
import { LanguageComponentComponent } from './components/language-component/language-component.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { EsperienzeComponentComponent } from './components/esperienze-component/esperienze-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentsEverComponent,
    StudentsComponent,
    HobbyComponentComponent,
    LanguageComponentComponent,
    StudentFormComponent,
    EsperienzeComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
