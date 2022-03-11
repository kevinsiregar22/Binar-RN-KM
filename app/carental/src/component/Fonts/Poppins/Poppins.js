import React from 'react'
import {Text, View} from 'react-native'



//cara 1 untuk set type font 

// const Poppins = props => {
//     return(
//     // <Text style={{fontFamily: 'Poppins-Bold'}}>{props.children}</Text>
//     <Text style={{fontFamily: `Poppins-${props.type}`}}>{props.children}</Text>
//    )
// }


//cara 2 untuk set type font yang lebih dinamis pake parameter object

const Poppins = ({type = 'Regular', children}) => {
    return(
    // <Text style={{fontFamily: 'Poppins-Bold'}}>{props.children}</Text>
    <Text style={{fontFamily: `Poppins-${type}`}}>{children}</Text>
   )
}

export default Poppins;