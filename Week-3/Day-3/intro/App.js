import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainRoutes from "./src/router/MainRoutes";



export default function App(){
 return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}















// import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
// import React, { useState } from 'react'
// import RenderSomeScreen from './src/component/SomeScreen';
// import contoh from './src/assets/images/contoh.jpg'



// export default function App(){  
//state adalah data yang bisa di akses oleh si komponen(file) tersebut, terkecuali data dikirim dari props contoh dibaris 23 firstname
//setFirstname mengubah nilai firsrname
//seperti contoh dibawah ini pada panggil on press
// const [firstname, setFirstname] = useState('Kevin siregar');
// const [umur, setUmur] = useState(21);
//   return (
//     <ScrollView>

//       <Text>
//         Halo nama sayaa {firstname} {''}
//         dan umur saya {umur} tahun
//       </Text>

//       <TouchableOpacity onPress={() => setFirstname('SKS')}>
//         <Text style={{fontSize: 20, color: 'red', letterSpacing: 3}}>Ganti namaa</Text>
//       </TouchableOpacity>

//     <RenderSomeScreen name="simon" age={22} anddres="medan" firstname={firstname}/>

//     <Image source={contoh} style={{width: 200, height: 200}} resizeMode="cover"/>
//     <Image source={{uri : 'https://images.unsplash.com/photo-1640622333314-05b7986f1b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}} style={{width: 200, height: 200}} resizeMode="cover"/>

//     <Text>Evaluasi merupakan struktur cerpen yang berfungsi untuk mengarahkan konflik kepada penyelesaian. Saat konflik sudah mencapai klimaks, penulis akan mulai mengarahkan alurnya menjadi peredaman suasana. Hal tersebut dilakukan dengan cara mulai menunjukkan jalan keluar atas konflik tersebut.

//         Pembaca bisa mulai menemukan tanda-tanda bahwa konflik akan segera menemui titik penyelesaian pada tahap evaluasi. Cara yang bisa dilakukan untuk mengupayakan solusi ini bisa dengan menghadirkan tokoh lain atau permainan karakter dari pemeran yang sebelumnya sudah ada.

//         Kehadiran tokoh lain sebagai penengah ini bisa dipilih oleh penulis apabila pemeran di dalam cerpen tersebut tidak terlalu banyak. Tokoh tritagonis ini akan berperan penting sebagai penengah apabila konflik yang diangkat merupakan perseteruan antara dua pihak.

//         Evaluasi konflik dengan memainkan karakter para pemeran di dalam cerpen bisa dilakukan dengan membawa alurnya untuk mendalami pemikiran dari tokoh utamanya. Pada tahap ini, penulis bisa memfokuskan tahapan evaluasi pada pemikiran tokoh utama yang mencari jalan keluar atas konflik tersebut.

//         Cerpen motivasi bisa menggunakan kedua cara evaluasi tersebut bergantung pada latar suasana yang dibangun oleh penulis. Tahapan evaluasi ini bisa dibuat hanya sebatas gambaran singkat berisi klue bahwa konflik akan segera menemukan titik penyelesaian.

//         5  Resolusi
//         Pada bagian resolusi ini konflik yang ada di dalam cerpen akan benar-benar menentukan titik penyelesaian. Konflik dalam cerpen akan terpecahkan secara keseluruhan, sehingga bisa menemukan titik penyelesaiannya.

//         Resolusi ini berisi pengungkapan fakta terkait permasalahan yang terjadi hingga pada solusi untuk menyelesaikannya. Semua permasalahan yang sudah dialami oleh tokoh di dalam cerpen tersebut akan segera berakhir karena solusinya sudah ditemukan.

//         Evaluasi merupakan struktur cerpen yang berfungsi untuk mengarahkan konflik kepada penyelesaian. Saat konflik sudah mencapai klimaks, penulis akan mulai mengarahkan alurnya menjadi peredaman suasana. Hal tersebut dilakukan dengan cara mulai menunjukkan jalan keluar atas konflik tersebut.

//         Pembaca bisa mulai menemukan tanda-tanda bahwa konflik akan segera menemui titik penyelesaian pada tahap evaluasi. Cara yang bisa dilakukan untuk mengupayakan solusi ini bisa dengan menghadirkan tokoh lain atau permainan karakter dari pemeran yang sebelumnya sudah ada.

//         Kehadiran tokoh lain sebagai penengah ini bisa dipilih oleh penulis apabila pemeran di dalam cerpen tersebut tidak terlalu banyak. Tokoh tritagonis ini akan berperan penting sebagai penengah apabila konflik yang diangkat merupakan perseteruan antara dua pihak.

//         Evaluasi konflik dengan memainkan karakter para pemeran di dalam cerpen bisa dilakukan dengan membawa alurnya untuk mendalami pemikiran dari tokoh utamanya. Pada tahap ini, penulis bisa memfokuskan tahapan evaluasi pada pemikiran tokoh utama yang mencari jalan keluar atas konflik tersebut.

//         Cerpen motivasi bisa menggunakan kedua cara evaluasi tersebut bergantung pada latar suasana yang dibangun oleh penulis. Tahapan evaluasi ini bisa dibuat hanya sebatas gambaran singkat berisi klue bahwa konflik akan segera menemukan titik penyelesaian.

//         5  Resolusi
//         Pada bagian resolusi ini konflik yang ada di dalam cerpen akan benar-benar menentukan titik penyelesaian. Konflik dalam cerpen akan terpecahkan secara keseluruhan, sehingga bisa menemukan titik penyelesaiannya.

//         Resolusi ini berisi pengungkapan fakta terkait permasalahan yang terjadi hingga pada solusi untuk menyelesaikannya. Semua permasalahan yang sudah dialami oleh tokoh di dalam cerpen tersebut akan segera berakhir karena solusinya sudah ditemukan.

// </Text>

//     </ScrollView>
//   );
//};


