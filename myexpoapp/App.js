import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {

    const [things, setThings] = useState([
        {text:'Mobile App Devolopment', key:'1'},
        {text:'Web Devolopment', key:'2'},
        {text:'Push Ups', key:'3'}
    ])

  return (
    <View style={styles.container}>
      <FlatList
        data={things}
        renderItem={(item)=>(
            <View style={styles.flatListBox}>
                <Text>{item.text}</Text>
            </View>
            
        )}
      
      />

    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.text}>
        Hello, Devs
        <Text style={styles.text}>Exercise</Text>
        <Text style={styles.text}>Study</Text>
          <Imageimaep
            source={{ uri: 'C:\Users\Hp\Desktop\rn-assignment3-11358166\myexpoapp\assets\Profile Image.png' }}
            style={styles.image}
          />

<Image
            source={{ uri: 'myexpoapp/assets/young woman working online.png' }}
            style={styles.image} />
          <Image
            source={{ uri: 'mmyexpoapp\assets\young woman working at desk.png' }}
            style={styles.image} />
           
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        marginTop:40
    },
    flatListBox:{
        marginVertical:20,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'#E8D1BA',
        borderRadius:15,
        width:354,
        height:128
    },

    rectangle: {
      width: '80%',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      width: 100,
      height: 100,
    },
  });
    
