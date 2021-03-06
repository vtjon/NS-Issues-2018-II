import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { isIOS } from "platform";
import * as uiHelper from "~/common/ui-helper";
const { CustomAppDelegate } = require("./delegate");
app.ios.delegate = CustomAppDelegate;

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (isIOS) {
      uiHelper.ios.setStatusBarColor("green");
    }
  }
}
