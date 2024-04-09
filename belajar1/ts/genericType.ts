
// generik type digunakan untuk suatu method dan hanya variable didalam method atau class dan property,method didalam class yang belum tahu apa type data nya
const getData = <T>(val: T) =>{
    return val
}

const getNama = <T>(nama: T):void =>{
  console.log(`my name is ${nama}`)
}


getNama(123)
console.log(getData('annas'))
