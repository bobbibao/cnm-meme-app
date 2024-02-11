import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const url = "https://655683f184b36e3a431fd9be.mockapi.io/user";
const Login = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data);
  const handleLogin = () => {
    const foundUser = data.find(
      (item) => item.userName === userName && item.password === password
    );
    if (foundUser) {
      console.log(foundUser);
      navigation.navigate("Index", { foundUser });
    } else {
      console.error("Invalid username or password");
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
        onChangeText={setUserName}
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
      <Pressable
        onPress={() => handleLogin()}
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
      </Pressable>
      <Pressable onPress={() => ForgotPass()} style={{ marginTop: 5 }}>
        <Text style={{ color: "#508BE3" }}>Quên mật khẩu?</Text>
      </Pressable>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Bạn chưa có tài khoản?</Text>
        <Pressable style={{ marginLeft: 50 }}>
          <Text style={{ color: "#508BE3" }}>Đăng kí</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
