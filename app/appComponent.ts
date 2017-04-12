import { Component, View } from "angular2/core";

import { AppConfig } from "./appConfig";
import { VideoModel } from "./videoModel";
import { VideoList } from "./videoList";

@Component({
    selector: 'my-app',
    template: `<h2 class="jumbotron">{{title}}</h2>
            <video-list></video-list>`,
    directives: [VideoList]
})
export class AppComponent {
    public title: string = AppConfig.title;
    public videos: Array<VideoModel>;

    constructor() {
        this.videos = [
            new VideoModel(1, "Huong dan Angular phan 1", "", "hoc angular 2 voi typescript"),
            new VideoModel(2, "Huong dan Angular phan 2", "", ""),
            new VideoModel(3, "Huong dan Angular phan 3", "", "")
        ];
    }
}