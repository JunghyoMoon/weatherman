import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Location from "expo-location";
// what is react native? => 자바스크립트를 이용해서 네이티브 엔진에게 메세지를 보냄?
// 자바스크립트와 모바일 기기의 다리 역할을 해줌.
// 편리하지만, 중간에 '통역사'가 반드시 필요한 만큼 성능에는 문제가 있을 수 있음.
// 일반적인 앱에는 탁월한 선택이지만, 3D를 다루는 게임이나 증강현실 등등... 은 만들기 힘들 것임.(성능이 구려져서..)
import { StyleSheet, Text, View } from 'react-native';
// components
import Loader from "./Loader";

// RN만의 규칙이 당연히 존재. => 예를 들면, 컴포넌트의 container, <div>같은 것들은 '<View>'로 처리하게 되어 있음.
// 텍스트는 전부 <Text>안에 있어야 하고.. 이외에도 리액트와 다른 차이점들이 존재함.
class App extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loader />
  }
}

export default App;
