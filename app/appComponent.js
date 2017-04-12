"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("angular2/core");
const appConfig_1 = require("./appConfig");
const videoModel_1 = require("./videoModel");
const videoList_1 = require("./videoList");
let AppComponent = class AppComponent {
    constructor() {
        this.title = appConfig_1.AppConfig.title;
        this.videos = [
            new videoModel_1.VideoModel(1, "Huong dan Angular phan 1", "", "hoc angular 2 voi typescript"),
            new videoModel_1.VideoModel(2, "Huong dan Angular phan 2", "", ""),
            new videoModel_1.VideoModel(3, "Huong dan Angular phan 3", "", "")
        ];
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `<h2 class="jumbotron">{{title}}</h2>
            <video-list></video-list>`,
        directives: [videoList_1.VideoList]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=appComponent.js.map