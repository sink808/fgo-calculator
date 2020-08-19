import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Route,
  Routes,
  Router,
  NavigationEnd,
  RouterEvent
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
interface NavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  navLinks: NavItem[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
  ) {
    this.setWebTitle();
  }

  ngOnInit(): void {
    this.setNavLinks();
  }

  private setNavLinks(): void {
    const isRouteConfigChildren: boolean = !!(this.route.routeConfig && this.route.routeConfig.children);
    this.navLinks = (isRouteConfigChildren) ?
      this.buildNavItems(this.route.routeConfig.children) :
      [];
  }

  private buildNavItems(routes: Routes): NavItem[] {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path,
        label: data.label,
        icon: data.icon
      }));
  }

  private setWebTitle(): void {
    this.router.events
    .pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    )
    .subscribe((router: RouterEvent) => {
      const nowUrl: string = router.url.replace('/', '');
      const nowRoute: Route = this.route.routeConfig.children.find((child) => nowUrl === child.path);
      this.title.setTitle(nowRoute.data.label);
    });
  }

}
