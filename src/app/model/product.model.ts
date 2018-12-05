export class ProductModel {
  constructor(
    public key: number,
    public name: string,
    public category: string,
    public categoryId: number,
    public description: string,
    public itemInStock: number,
    public thumbnail: string,
    public frontView: string,
    public sideViewL: string,
    public sideViewR: string,
    public backView: string,
    public topView: string,
    public realPrice: number,
    public discountPrice: number
  ) {}
}
