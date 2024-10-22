import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FooterComponent } from "./layout/footer/footer.component";
import { ToastModule } from "primeng/toast";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, RouterOutlet, FontAwesomeModule, FooterComponent, ToastModule],
  templateUrl:"./app.component.html",
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  faIconLibrary = inject(FaIconLibrary);
  isListingView = true;

  ngOnInit(): void {
      this.initFontAwesome();
  }

  private initFontAwesome(){
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}




