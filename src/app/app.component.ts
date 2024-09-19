import { Component } from '@angular/core';
import { RouterOutlet,RouterLink ,RouterLinkActive } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FooterComponent ,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gateway-ui';
}
