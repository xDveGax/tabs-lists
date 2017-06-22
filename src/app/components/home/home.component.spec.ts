import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MockTabsComponent } from '../tabs/tabs.component.mock';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  // https://angular.io/guide/testing#the-componentfixture
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement; // The DebugElement provides crucial insights into the component's DOM representation.
  let el: HTMLElement;

  beforeEach(async(() => {
    // https://angular.io/guide/testing#testbed-class-summary
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, MockTabsComponent ]
    })
    // https://embed.plnkr.co/?show=preview Examples for testing.
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance; // Instancia del componente HomeComponent.
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement; // The corresponding DOM element in the browser.
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges(); // Detecta los cambios en el componente.
    expect(el.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toEqual('Test Title');
  });
});
