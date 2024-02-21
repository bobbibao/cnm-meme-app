import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import HeaderIndex from "./HeaderIndex";
import Footer from "./Footer";
export default Index = ({ navigation }) => {
 
  let index_imgs = [
    "https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-1.jpg",
    "https://anhdephd.vn/wp-content/uploads/2022/04/avatar-gau-1.jpg",
    "https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-2.jpg",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderIndex navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={true}>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[0] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Kiều Dương</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[1] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Tú Uyên</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[2] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Văn Bảo</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[0] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Huỳnh Thắng</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[1] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Hoàng Bảo</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[2] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Thiên Bâng</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[0] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Kiều Dương</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[1] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Tú Uyên</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[2] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Văn Bảo</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[0] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Huỳnh Thắng</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[1] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Hoàng Bảo</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[2] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Thiên Bâng</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[0] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Kiều Dương</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[1] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Tú Uyên</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[2] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Văn Bảo</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[0] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Huỳnh Thắng</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[1] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Hoàng Bảo</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchChat}>
          <Image source={{ uri: index_imgs[2] }} style={styles.avt}></Image>
          <View style={styles.viewChat}>
            <Text style={styles.userName}>Thiên Bâng</Text>
            <Text style={styles.chatContent}>Ok bài này 10 điểm</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avt: {
    height: 60,
    width: 60,
    borderRadius: 360,
  },
  touchChat: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 70,
  },

  userName: {
    fontSize: 20,
  },
  chatContent: {
    marginTop: 10,
    color: "gray",
    fontSize: 16,
  },
  viewChat: {
    marginLeft: 10,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
    width: "100%",
  },
});
