import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data/data.service';

class DataServiceStub {

}

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,AppRoutingModule, DashboardComponent],
      declarations: [AppComponent],
      providers :  [ DataService,  DataServiceStub]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
