import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { projectQuery } from '../gql/projects.query';
import { Project } from '../gql/types';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  public project: Project;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apollo: Apollo,
    public sanitizer: DomSanitizer,
  ) {}

  public get safeVideoUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.project.youtubeEmbedLink}`,
    );
  }

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.apollo
            .watchQuery<any>({
              query: projectQuery,
              variables: {
                id: params.id,
              },
            })
            .valueChanges.pipe(map((e) => e.data.project)),
        ),
      )
      .subscribe((project) => (this.project = project));
  }
}
