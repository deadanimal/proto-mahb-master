import { Component } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor(
    private router: Router,
    public translate: TranslateService,
    ) {

      this.translate.addLangs(["en", "ms"]);
      this.translate.setDefaultLang("en");
      this.translate.use("en");

      this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationStart) {
              // Show loading indicator
              window.scrollTo(0,0);
          }

          if (event instanceof NavigationEnd) {
              // Hide loading indicator
          }

          if (event instanceof NavigationError) {
              // Hide loading indicator

              // Present error to user
              console.log(event.error);
          }
     });
   }
}
