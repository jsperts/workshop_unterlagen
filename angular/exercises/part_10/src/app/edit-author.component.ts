import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<h1>Edit author {{id}}</h1>`
})
export class EditAuthorComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = <string>this.route.snapshot.paramMap.get('id');
  }
}
