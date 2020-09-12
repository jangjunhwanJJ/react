import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading"; 
import * as Location from "expo-location";
import axios from "axios";

const API_KEY ="ba3f1c69b6f1611cc705462ca75fcb49";

export default class extends React.Component {
  constructor(){
    
    super();
  }
  state ={
    isLoading :true
  }
  getWeather = async(latitude ,longitude) =>{
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    console.log(data);
  }
  getLocation = async() =>{
    try{
      //throw Error();
      let {status} = await Location.requestPermissionsAsync();
      if(status != "granted"){
        console.log("위치정보 접근권한이 없습니다.");
      }
      let {coords : {latitude , longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude +"/" + longitude);
      this.getWeather(latitude ,longitude)
      this.setState({ isLoading:false });
    }catch(error){
      Alert.alert("Can't find you.");
      console.log(error);
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading/> : null;   
  
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
