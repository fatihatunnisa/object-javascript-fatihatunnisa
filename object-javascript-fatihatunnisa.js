// Buatlah sebuah object hewan yang berisikan:
// ciri-ciri (atribute) :
//  nama: String
// kaki: Number
// warna: Array
// spesies: String (mamalia/unggas/dll)
// makanan: Array
// keahliannya (method) :
// terbang / loncat / berburu / dll

// Tampilkan dengan console.log seperti ini, Contoh :
// Nama: Kucing
// Kaki :  4
// Spesies: Mamalia
// Warna: oren, putih, item
// Makanan : Ikan, Ayam
// Suara: Miaaaaw

let hewan ={
    Nama: 'Kucing',
    Kaki :  4,
    Spesies:'Mamalia', 
    Warna: ['oren', 'putih',' item'],
    Makanan : ['Ikan', 'Ayam'],
    Suara: 'Miaaaaw'
}
console.log (hewan);

// Exercise 2

    const data = 
    [
    {
        name: 'Alpha',
        class: 'Dragon',
        club: ['Bola', 'Bulutangkis']
    },
    {
        name: 'Beta',
        class: 'Lizard',
        club: ['Membaca', 'Bulutangkis']
    }
    ];
    data.forEach((listData)=>{
        console.log(listData);
    })
// Tampilkanlah seperti ini
// Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
// Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis



// Exercise 3

// let todos = [
//   {
//       id: 1, 
//       todo: 'belajar coding'
//     },
//   {
//       id: 2, 
//       todo: 'nanti tidur'
//     }
// ];

// Buatlah function CRUD sederhana pada data di atas
// printAll(), hasil:
// 1, "belajar coding"
// 2, "nanti tidur"
let todos = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ];
todos.forEach((todosData)=>{
    console.log(todosData);
})

// printByID(id), hasil
// 1, "belajar coding"
let todos = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ];
todos.forEach((todosData)=>{
    console.log(todosData.id);
})

// add(newTodo), hasil
// 1, "belajar coding"
// 2, "nanti tidur"
// 3, "ngerjain tugas"
let todos = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ];
todos.push
   (id: 3, todo: 'ngerjain tugas')
console.log(todos);
// deleteByID(id), hasil
// 1, "belajar coding"
// 3, "ngerjain tugas"
let todos = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ]
  function deleteByID(id){
      delete todos[id]
      console.log(todos)
  }
deleteByID(1)

// updateByID(newTodo), hasil
// 1, "belajar CRUD"
// 3, "ngerjain tugas"
let todos = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ]
  function updateByID(id, newTodo){
      todos[id] = newTodo
      console.log(todos)
  }
updateByID(1, 'belajar crud')


// Exercise 4:

// Buatlah tampilan buah menggunakan array of object
// Data yang perlu ditampilkan
// Nama, warna, nama latin, tipe biji, gambar buah
const buah = [ 
    {
        nama :"Apple",
        warna :"Red",
        namaLatin :"Malus Sylvestris",
        tipeBiji : "Singel Seed",
        gambarBuah :1
    },
    {
        nama :"Banana",
        warna : "Yellow",
        namaLatin : "Musa Paradisiaca",
        tipeBiji : "Double Seed",
        gambarBuah :2
    },
    {
        nama :"Blueberry",
        warna : "Purple",
        namaLatin : "Vaccinium Carybosum",
        tipeBiji : "Single Seed",
        gambarBuah :3
    },
    {
        nama :"Cherry",
        warna : "Red",
        namaLatin :"Prunus Apetala",
        tipeBiji : "Double Seed",
        gambarBuah :4
    },
    {
        nama :"Lemon",
        warna : "Yellow",
        namaLatin :"Citrus Liman",
        tipeBiji : "Single Seed",
        gambarBuah :5
    },
    {
        nama :"Manggo",
        warna : "Orenge",
        namaLatin :"Citrus Seed",
        tipeLiji : "Double Seed",
        gambarBuah :6
    },
    {
        nama :"Orange",
        warna : "Yellow",
        namaLatin :"Malus Sylvestris",
        tipebiji : "Double Seed",
        gambarBuah : 7
    },
    {
        nama :"Pear",
        warna : "Yellow",
        namaLatin : "Pyrus Caucasia",
        tipeBiji : "Double Seed",
        gambarBuah :8
    }
];
buah.forEach((buahData)=>{
    console.log(buahData);
});