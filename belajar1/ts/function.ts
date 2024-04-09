let getName = (nama:string):string =>{
    //  untuk type data pengembalian string dan number wajib ada return
      return nama
} 

let printName = (nama:string):void =>{
  // untuk type data void tidak boleh ada return
  console.log(nama)
}

// argument function
let hitung = (val1:number, val2:number):number =>{
    return val1+val2  
}


// default parameter
// untuk default parameter wajib di position terakhir
let hitung2 = (val1:number, val2:number, val3:number=4):number =>{
    return val1+val2+val3 
}

// optional parameter menggunakan ? tapi hanya bisa digunakan untuk string atau boolean
let biodata1 = (nama:string = "agus",age?:number) =>{
  return `my name is ${nama}, my age is ${age} years old`
}


//  function as type

// mengubah method menjadi type data
type tambah = (val1:number,val2:number) => number
// wajib mewariskan parameter yang ada didalah method
const add:tambah = (val1: number,val2: number):number =>{
  return val1+val2
}

printName("nanas")
console.log(getName("agus"))
console.log(hitung(10,5))
console.log(hitung2(2,2))
console.log(biodata1())
console.log(add(12,5))