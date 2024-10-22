import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FooterComponent } from "./layout/footer/footer.component";
import { ToastModule } from "primeng/toast";
import { ToastService } from './layout/toast.service';
import { MessageService } from 'primeng/api';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, RouterOutlet, FontAwesomeModule, FooterComponent, ToastModule, NavbarComponent],
  providers: [MessageService],
  templateUrl:"./app.component.html",
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  faIconLibrary = inject(FaIconLibrary);
  isListingView = true;
  toastService = inject(ToastService);
  messageService = inject(MessageService);

  ngOnInit(): void {
      this.initFontAwesome();
      this.listenToastService();
  }

  private initFontAwesome(){
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  private listenToastService(): void{
    this.toastService.sendSub.subscribe({
      next: newMessage => {
        if(newMessage && newMessage.summary !== this.toastService.INIT_STATE){
          this.messageService.add(newMessage);
        }
      }
    })
  }
}




