export class UserDataModel {
  public key: number;
  public name: string;
  public email: string;
  public password: any;
  public imagePath: string;
  public lastseen: string;

  constructor(k: number, n: string, e: string, p: any, i: string) {
    this.key = k;
    this.name = n;
    this.email = e;
    this.password = p;
    this.imagePath = i;
    this.lastseen = null;
  }
}
