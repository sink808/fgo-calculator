import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Routes
} from '@angular/router';

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
  ) {}

  ngOnInit(): void {
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

}
