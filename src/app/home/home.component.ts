import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
      private userService: UserService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.userService.logout()
        .then(() => {
          this.router.navigate(['/login'])
        })
        .catch(error => console.log(error))
  }

}
