export class Quotes {
  public showUploader: boolean;

// tslint:disable-next-line: max-line-length
  constructor(public id: number, public name: string, public upVote: number, public DownVote: number,  public uploader: string, public completeDate: Date) {
    this.showUploader = false;
  }

}
