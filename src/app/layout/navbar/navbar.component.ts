import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { AvatarComponent } from './avatar/avatar.component';
import { CategoryComponent } from './category/category.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, ButtonModule, ToolbarModule,
    MenuModule, AvatarComponent, CategoryComponent],
  providers: [DialogService],  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  location = "Anywhere";
  guests = "Add guests";
  dates = "Any week";

  //Login and out methods here

  currentMenuItems: MenuItem[] | undefined = [];

  private fetchMenu(){

    return[
      {
        label: "Sign up",
        styleClass: "font-bold"
      },
      {
        label: "Log in",
      }
    ]
  }

  ngOnInit(): void {
      
  }
 
}
