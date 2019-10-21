import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.element.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }
  ngOnDestroy() {
    this.element.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }
}
