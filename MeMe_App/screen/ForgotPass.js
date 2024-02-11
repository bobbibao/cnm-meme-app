import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ForgotPass = ({ navigation }) => {
  const Back = () => {
    navigation.navigate("Login");
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
        style={{ height: 325, width: 332.15, alignItems: "center" }}
      />

      <Text style={{ marginLeft: -200, marginBottom: 20 }}>
        <b>Đặt lại mật khẩu</b>
      </Text>
      <TextInput
        style={{
          width: "80%",
          height: 60,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#00AE72",
          paddingLeft: 20,
          fontSize: 14,
          color: "gray",
          alignItems: "center",
        }}
        placeholder="Nhập email hoặc số điện thoại"
      />
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <Pressable
          onPress={() => Back()}
          style={{ marginLeft: 10, marginTop: 10 }}
        >
          <Text style={{ color: "#508BE3" }}>Trở lại</Text>
        </Pressable>
        <Pressable
          style={{
            width: 146,
            height: 36,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00AE72",
            flexDirection: "row",
            marginLeft: 80,
          }}
        >
          <Text style={{ fontSize: 14, color: "#FFF" }}>Tiếp theo</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPass;
