import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {projectsQuery} from "../gql/projects.query";
import {map} from "rxjs/operators";
import {Category, Project} from "../gql/types";
import {Observable} from "rxjs";
import {categoriesQuery} from "../gql/categories.query";

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public categories$: Observable<Category[]>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.projects$ = this.apollo
      .watchQuery<any>({query: projectsQuery})
      .valueChanges
      .pipe(
        map(e => e.data.projects)) as Observable<Project[]>;

    this.categories$ = this.apollo
      .watchQuery<any>({query: categoriesQuery})
      .valueChanges
      .pipe(
        map(e => e.data.categories)) as Observable<Category[]>;
  }
}
