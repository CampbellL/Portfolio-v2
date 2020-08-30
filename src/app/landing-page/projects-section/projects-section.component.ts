import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {AngularFireAnalytics} from "@angular/fire/analytics";
import {projectsCategoryQuery, projectsQuery} from "../../gql/projects.query";
import {Category, Project} from "../../gql/types";
import {categoriesQuery} from "../../gql/categories.query";

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  public activeActiveCategoryFilter = '';
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

  public applyFilter(categoryId: string): void {
    this.activeActiveCategoryFilter = categoryId;
    this.projects$ = this.apollo
      .watchQuery<any>({query: projectsCategoryQuery, variables: {
        categoryId
        }})
      .valueChanges
      .pipe(
        map(e => e.data.projects)) as Observable<Project[]>;
  }

  public resetFilter(): void {
    this.activeActiveCategoryFilter = '';
    this.projects$ = this.apollo
      .watchQuery<any>({query: projectsQuery})
      .valueChanges
      .pipe(
        map(e => e.data.projects)) as Observable<Project[]>;
  }
}
