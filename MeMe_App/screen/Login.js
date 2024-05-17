import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
import {API_URL} from '@env';

// import Contacts from 'react-native-contacts';

const Login = ({ navigation }) => {
   const loginBobbi = async () => {
      // this comment for testing purposes only the login (Không cần phải nhập lại tk, mk) 
      // const token = await SecureStore.getItemAsync('authToken');
      // if(token) navigation.navigate("Index");
      console.log(API_URL + 123);
      fetch(API_URL+'/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          "email": email,
          "password": password,
        }),
        
      }).then(response => response.json())
      .then(async response => {
        console.log(response);
        await SecureStore.setItemAsync('authToken', response.token);
        await SecureStore.setItemAsync('userId', response._id);
        navigation.navigate("Index");
      });
    //  navigation.navigate("Index");
   };
   const Register = () => {
     navigation.navigate("Register");
   };
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const login = async () => {
  if (!email || !password) {
    alert("Vui lòng không để trống email hoặc mật khẩu");
    return;
  }

  try {
    const response = await fetch("http://192.168.1.13:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error(responseData);
      throw new Error(
        `Đăng nhập không thành công, sai thông tin. Mã lỗi: ${
          response.status
        }, Thông điệp: ${responseData.message || ""}`
      );
    }

    console.log(responseData); // In dữ liệu phản hồi từ server
    navigation.navigate("Index"); // Điều hướng sau khi đăng nhập thành công
  } catch (error) {
    console.error(`Lỗi: ${error.message}`);
    alert(`Đăng nhập không thành công! Lỗi: ${error.message}`);
  }
};

  const ForgotPass = () => {
    navigation.navigate("ForgotPass");
  };

  return (
    <View
      style={{
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/logoMeme.png")}
        style={{ height: 325, width: 332.15 }}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
      <TextInput
        onChangeText={setEmail}
        style={{
          width: "80%",
          height: 60,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#00AE72",
          paddingLeft: 20,
          fontSize: 14,
          color: "gray",
        }}
        placeholder="Nhập email hoặc số điện thoại"
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={setPassword}
        style={{
          width: "80%",
          height: 60,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#00AE72",
          paddingLeft: 20,
          fontSize: 14,
          color: "gray",
          marginTop: 30,
        }}
        placeholder="Nhập mật khẩu "
      />
      <TouchableOpacity
        onPress={loginBobbi}
        style={{
          width: 146,
          height: 36,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00AE72",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 14, color: "#FFF" }}>Đăng nhập</Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
      <Pressable onPress={() => ForgotPass()} style={{ marginTop: 5 }}>
        <Text style={{ color: "#508BE3" }}>Quên mật khẩu?</Text>
      </Pressable>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Bạn chưa có tài khoản?</Text>
        <Pressable onPress={() => ForgotPass()} style={{ marginLeft: 50 }}>
          <Text style={{ color: "#508BE3" }}>Đăng kí</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

