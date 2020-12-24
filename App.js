import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,TouchableOpacity,Alert,Image} from 'react-native';
import *as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import *as Permissions from 'expo-permissions';

const App = ()=>{

  const [selectedImage,setSelectedImage] = React.useState("https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/C5TDaJBPw67oyaAtLy3g7Fgm/1b33f0ae5d4693bf57c52014e04c03ab70f276df2ccd0b8ddde11732686ee1a9");

  const pickfromgallery = async()=>{
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

      if(permissionResult.granted === false){
        alert('you need to give up permission to work');
        return;
      }
          let data = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true
          });
          if(data.cancelled === true){
            return;
          }

          setSelectedImage(data.uri);
        };

      
        return(
          <View style={styles.container}>
            <View style={{width:100,height:89,}}>
            <TouchableOpacity onPress={pickfromgallery} style={{flexDirection:'row'}}>
                            <Image style={styles.avatar} 
                                source={{ uri: selectedImage}} />
                        <View style={styles.camera}>
                        <Feather name="camera" size={16} color="#0C948A" style={{marginTop:4}} />
                          </View>
                        </TouchableOpacity>
                        
            </View>
                        
          </View>
        )
            
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C948A',
    alignItems: 'center',
    justifyContent:'center'
  },
  thumbnail: {
    width:500,
    height:400,
    resizeMode:'contain'
  },
  headerContent: {
    width: 86,
    height:50,
},
avatar: {
    width: 75,
    height: 80,
    borderRadius: 70,
    // borderWidth: 4,
    // borderColor: "white",
    marginBottom: 0,
},
camera: {
  width: 25,
  alignSelf:'flex-end',
  alignItems:'center',
  backgroundColor: '#fff',
    height: 25,
    bottom:-5,
    position:'absolute',
    marginLeft:55,
    borderRadius:20,
    // borderWidth: 4,
    // borderColor: "white",
    marginTop:50,
    marginRight:35
}
});
