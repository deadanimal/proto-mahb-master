import { Component, OnInit, ViewChild } from '@angular/core';
import {
  LiveChatWidgetModel,
  LiveChatWidgetApiModel,
} from "@livechat/angular-widget";
import { tileLayer, latLng, marker, icon } from "leaflet";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-getting-there',
  templateUrl: './getting-there.component.html',
  styleUrls: ['./getting-there.component.scss']
})
export class GettingThereComponent implements OnInit {

  public isLiveChatWidgetLoaded: boolean = false;
  public liveChatApi: LiveChatWidgetApiModel;

  @ViewChild("liveChatWidget", { static: false })
  public liveChatWidget: LiveChatWidgetModel;

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 8,
    center: latLng(3.4582308051504707, 101.5892640625),
  };
  layers = [
    // circle([ 46.95, -122 ], { radius: 5000 }),
    // polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([3.4582308051504707, 101.5892640625], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/default/pinpoint-red.png",
      }),
    }),
    //3.140853, 101.693207
    marker([3.140853, 101.693207], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/default/pinpoint-blue.png",
      }),
    }),
    marker([2.691369, 101.750527], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/default/pinpoint-yellow.png",
      }),
    }),
  ];
  
  constructor(
    public translate: TranslateService
    ) { }

  ngOnInit() {
  }
  
  onChatLoaded(api: LiveChatWidgetApiModel): void {
    this.liveChatApi = api;
    this.isLiveChatWidgetLoaded = true;

    // Sometimes it can happen that LC_Invite is is still being loaded when onChatLoaded is called. To ensure that LC_Invite is loaded you can give additional check to onChatLoaded function:
    // api.on_after_load = () => {
    //   this.liveChatApi = api;
    //   this.isLiveChatWidgetLoaded = true;
    // };
  }

  onChatWindowMinimized() {
    console.log("minimized");
  }

  onChatWindowOpened() {
    console.log("opened");
  }

  openChatWindow(): void {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.openChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.open_chat_window();
    }
  }

  hideChatWindow() {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.minimizeChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.minimize_chat_window();
    }
  }

}
