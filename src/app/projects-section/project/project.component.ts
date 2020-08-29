import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Project} from "../../gql/types";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() public project: Project;
  constructor(private componentRef: ElementRef) { }

  ngOnInit(): void {
    this.componentRef.nativeElement.style.backgroundImage = `url(${this.project.image.url})`;
  }
}
