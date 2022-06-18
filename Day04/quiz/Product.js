export default class Product{
  static totalProduct = 0

  constructor(prodId,prodName, category, price=0,totalBuy=1){
    this.prodId = prodId
    this.prodName = prodName
    this.category = category
    this.price = price
    this.totalBuy = totalBuy
    Product.totalProduct++
  }

  setPrice(price){
    return this.price
  }

  setTotalBuy(total){
    return this.totalBuy
  }

  toString(){
    return this.setPrice() * this.setTotalBuy()
  }
}