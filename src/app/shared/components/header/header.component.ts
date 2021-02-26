import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  title!: string;

  constructor(
    private authService: AuthService,
  ) { }

  logout() {
    this.authService.logout();
  }

  //   console.log('Construtor');
  // }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges');
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }

  // ngOnDestroy() {
  //   console.log('Header DESTRUIDO');
  // }

}
