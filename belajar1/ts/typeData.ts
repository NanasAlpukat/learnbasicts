let nama:string = "Nanas";
let angka:number = 2024;
let logika:boolean = true;

//  type data any digunakan untuk multiy type data string,bool,number
let multyDataS:any = "agus"; // string
let multyDataN:any = 2023; // number

// union type tipe data yang memliki 2 jenis type data dalam satu variable
let phone:number|string;
phone = 6287556541;
phone = "087556541";

// array
let array1:number[] = [1,2,3,4] 
let array2:string[] = ["agus","budi","rahman"] 
let array3:boolean[] = [true,false] 
let array4:any[] = [true,"agus",2024]

// tuples adalah sebuah array yang item nya terbatas
let biodata: [string,number] // type data harus sesuai dengan yang sudah dideclarasikan
biodata = ["nanas",2024]
// biodata = ["nanas",true] // contoh salah


// enum adalah sebuah type data yang menyimpan sekumpulan data constanta
enum MonthStr {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MEY = "Mei"
}
enum MonthNum {
  JAN = 1,
  FEB = 2,
  MAR = 3,
  APR = 4,
  MEY = 5
}


console.log(nama)