import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project} from "../gql/types";
import {Apollo} from "apollo-angular";
import {projectQuery, projectsCategoryQuery} from "../gql/projects.query";
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  public project: Project;
  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo, public sanitizer: DomSanitizer) { }

  public get safeVideoUrl(): SafeUrl {
    return this.sanitizer
      .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.project.youtubeEmbedLink)
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(params => {
      return this.apollo
        .watchQuery<any>({query: projectQuery, variables: {
            id: params.id
          }})
        .valueChanges
        .pipe(
          map(e => e.data.project))

    })).subscribe(project => this.project = project);
  }

}
