
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { RadioButton } from 'react-native-paper';



 
function Register({ navigation }) {
  const Back = () => {
    navigation.navigate("Login");
  };

const [gender, setGender] = useState('1');


  return (
    <View
      style={{
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/logoMeme.png")}
        style={{ height: 200, width: 200, alignItems: "center" }} />
      <Text style={{ alignItems: "center", fontSize: 30 }}>
        <b>Đăng kí</b>
      </Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TextInput
          style={{
            width: "167px",
            height: 60,
            borderWidth: 1,
            marginRight: 180,
            borderRadius: 10,
            borderColor: "#00AE72",
            paddingLeft: 15,
            fontSize: 14,
            color: "gray",
          }}
          placeholder="Họ" />
        <TextInput
          style={{
            width: "167px",
            height: 60,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#00AE72",
            paddingLeft: 15,
            fontSize: 14,
            color: "gray",
          }}
          placeholder="Tên" />
      </View>


      <TextInput
        style={{
          width: "516px",
          height: 60,
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 10,
          borderColor: "#00AE72",
          paddingLeft: 15,
          fontSize: 14,
          color: "gray",
          alignItems: "center",
        }}
        placeholder="Nhập email hoặc số điện thoại" />


      <TextInput
        style={{
          width: "516px",
          height: 60,
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 10,
          borderColor: "#00AE72",
          paddingLeft: 15,
          fontSize: 14,
          color: "gray",
          alignItems: "center",
        }}
        placeholder="Nhập mật khẩu" />

      <Text style={{ textAlign: 'left', marginTop: 10 }}>
        <b>Ngày sinh</b>
      </Text>


      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TextInput
          style={{
            width: "165px",
            height: 60,
            borderWidth: 1,
            marginRight: 10,
            borderRadius: 10,
            borderColor: "#00AE72",
            paddingLeft: 20,
            fontSize: 14,
            color: "gray",
            alignItems: "center",
          }}
          placeholder="Ngày" />
        <TextInput
          style={{
            width: "165px",
            height: 60,
            borderWidth: 1,
            borderRadius: 10,
            marginRight: 10,
            borderColor: "#00AE72",
            paddingLeft: 20,
            fontSize: 14,
            color: "gray",
            alignItems: "center",
          }}
          placeholder="Tháng" />
        <TextInput
          style={{
            width: "165px",
            height: 60,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#00AE72",
            paddingLeft: 20,
            fontSize: 14,
            color: "gray",
            alignItems: "center",
          }}
          placeholder="Năm" />
      </View>

      <Text style={{ marginTop : 10}}>
        <b>Giới Tính</b>
      </Text>
        
  
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <RadioButton
      value="1"
      status={gender === '1' ? 'checked' : 'unchecked'}
      onPress={() => setGender('1')}
    />
    <Text>Nam</Text>

    <RadioButton
      value="0"
      status={gender === '0' ? 'checked' : 'unchecked'}
      onPress={() => setGender('0')}
    />
    <Text>Nữ</Text>
</View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Pressable
          style={{
            width: 146,
            height: 36,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#6EC3C9",
            flexDirection: "row",
           
          }}
        >
          <Text style={{ fontSize: 14, color: "#FFF" }}>Đăng kí</Text>
        </Pressable>
      </View>
 
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Pressable
          style={{ marginLeft: 10, marginTop: 10 }}
        >
          <Text >Bạn đã có tài khoản?</Text>
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
          <Text  onPress={Back} style={{ fontSize: 14, color: "#FFF" }}>Đăng nhập</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Register;
