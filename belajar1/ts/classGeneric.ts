class List<T> {
  private data:T[];

  constructor(...element:T[]){
    this.data = element
  }

  add(element: T):void{
    this.data.push(element)
  }

  addMultiple(...element:T[]):void{
    this.data.push(...element)
  }

  getAll(): T[]{
    return this.data
  }
}


let data1 = new List<number | object>({'nama':'annas','age':24},{'nama':'rahman','age':21})

console.log(data1.getAll())
data1.add({'nama':'rafi','age':22})
console.log(data1.getAll())
data1.addMultiple({'nama':'nabila','age':23},{'nama':'putri','age':21},2024)
console.log(data1.getAll())

