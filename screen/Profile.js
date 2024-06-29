import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert 
} from 'react-native';
import { Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';
import Footer from './Footer';
import { API_URL } from '@env';
export default function Profile({ navigation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: '',
    phone: '',
    dob: '',
    gender: '',
    name: '',
    avatar: '',
  });
  const [userInfoUpdate, setUserInfoUpdate] = useState({ ...userInfo });
  const [avatar, setAvatar] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await SecureStore.getItemAsync('authToken');
        console.log('token', token);
        const response = await fetch(`${API_URL}/api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        });
        const result = await response.json();
        console.log('Data', result.data);
        setUserInfo(result.data);
        setUserInfoUpdate(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);

  // const requestPermission = async () => {
  //   if (Platform.OS !== 'web') {
  //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera roll permissions to make this work!');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  const handleChooseImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
        console.log('URI', result.assets[0].uri);
        setFile(result.assets[0]);
      }
    } catch (error) {
      console.error('Error choosing image:', error);
    }
  };

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setAvatar('');
    setFile(null);
    setUserInfoUpdate(userInfo);
  };

  const handleChange = (name, value) => {
    setUserInfoUpdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDoneClick = async () => {
    const token = await SecureStore.getItemAsync('authToken');

    if (!file && userInfoUpdate.name === userInfo.name && userInfoUpdate.phone === userInfo.phone && userInfoUpdate.dob === userInfo.dob) {
      alert('Nothing to update');
      setIsEditing(false);
      setAvatar('');
      setFile(null);
      setUserInfoUpdate(userInfo);
      return;
    }

    if (file) {
      const formData = new FormData();
      formData.append('avatar', {
        uri: file.uri,
        type: file.type,
        name: file.fileName,
      });

      try {
        const response = await fetch(`${API_URL}/api/profile/avatar`, {
          method: 'POST',
          headers: {
            Authorization: token,
          },
          body: formData,
        });

        if (response.ok) {
          alert('Image uploaded successfully');
          setIsEditing(false);
          setFile(null);
        } else {
          console.log('Failed to upload image');
          setIsEditing(false);
          setAvatar('');
          setFile(null);
          setUserInfoUpdate(userInfo);
        }
      } catch (error) {
        console.log('Error uploading image:', error);
        setIsEditing(false);
        setAvatar('');
        setFile(null);
        setUserInfoUpdate(userInfo);
      }
    }

    if (userInfoUpdate.name !== userInfo.name || userInfoUpdate.phone !== userInfo.phone || userInfoUpdate.dob !== userInfo.dob) {
      try {
        const response = await fetch(`${API_URL}/api/profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(userInfoUpdate),
        });

        if (response.ok) {
          alert('Profile updated successfully');
          setIsEditing(false);
          setFile(null);
          const res = await fetch(`${API_URL}/api/profile`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
            },
          });
          const result = await res.json();
          setUserInfo(result.data);
          setUserInfoUpdate(result.data);
        } else {
          console.log('Failed to update profile');
          setIsEditing(false);
          setAvatar('');
          setFile(null);
          setUserInfoUpdate(userInfo);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogoutClick = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            await SecureStore.deleteItemAsync('authToken');
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trang cá nhân</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={handleChooseImage}>
          <Image source={{ uri: selectedImage || userInfo.avatar }} style={styles.profilePic} />
        </TouchableOpacity>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.name}>{userInfo.name}</Text>
            <Text style={styles.info}>{userInfo.phone}</Text>
            <Text style={styles.info}>{userInfo.dob}</Text>
            <Text style={styles.info}>{userInfo.email}</Text>
            {isEditing ? (
              
              <View>
                 <TextInput
                  style={styles.input}
                  value={userInfoUpdate.name}
                  onChangeText={(text) => handleChange('name', text)}
                />
                <TextInput
                  style={styles.input}
                  value={userInfoUpdate.phone}
                  onChangeText={(text) => handleChange('phone', text)}
                />
                <TextInput
                  style={styles.input}
                  value={userInfoUpdate.dob}
                  onChangeText={(text) => handleChange('dob', text)}
                />
               

                <Button title="Save" onPress={handleDoneClick} />
                <Button title="Cancel" onPress={handleCancelClick} />
              </View>
            ) : (
              <Button title="Chỉnh sửa trang cá nhân" onPress={handleUpdateClick} />
            )}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutClick}>
              <Text style={styles.logoutButtonText}>Đăng xuất</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </ScrollView>
      <Footer navigation={navigation} style={styles.footer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: '#00AE72',
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
