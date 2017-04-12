export class VideoModel {
    public id: number;
    public title: string;
    public url: string;
    public desc: string;

    constructor(_id: number, _title: string, _url: string, _desc?: string) {
        var self = this;
        self.id = _id;
        self.title = _title;
        self.url = _url;
        self.desc = _desc;
    }
}