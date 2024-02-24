import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Footer from "./Footer";

const AllPeople = ({ navigation }) => {
  let avatar_imgs = [
    "https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-1.jpg",
    "https://anhdephd.vn/wp-content/uploads/2022/04/avatar-gau-1.jpg",
    "https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-2.jpg",
    "https://i.pinimg.com/736x/bd/8b/23/bd8b235016ce956a9c84b2638b7ba975.jpg",
    "https://i.pinimg.com/originals/c6/2e/0d/c62e0d3e9a34c74e84a0f7f952ce3695.jpg",
    "https://i.pinimg.com/236x/db/8d/48/db8d4877d92d07b4028d19f4c367ab50.jpg",

    "https://photo.znews.vn/w660/Uploaded/qfssu/2024_02_21/428618635_924724602361020_9133576087516466730_n.jpg",
    "https://images2.thanhnien.vn/528068263637045248/2023/4/17/ygphunhanrosekangdongwonhenho14-1681738309251368900159.png",
    "https://kenh14cdn.com/203336854389633024/2023/3/30/photo-2-1680196805294365329433.jpeg",
    "https://afamilycdn.com/150157425591193600/2023/11/21/5-1700537082561264721653-1700537396856-17005373972061158561729-1700540818234-17005408184892129601772.jpg",
    "https://media.viez.vn/prod/2022/9/14/202202220433172224_1de25657_20ca_4b3d_9e80_60a1e9568ec7_de3685b411.jpeg",
    "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/23/1140769/Ngo-Loi.png",
    "https://tq1.mediacdn.vn/2020/6/21/20200508153114-f3ac-15927490313442136564411.jpg",
    "https://duhocsunny.edu.vn/wp-content/uploads/2023/02/Dien-vien-nam-Han-Quoc-Park-Bo-Gum.jpg",
    "https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/5/4/photo-1-16516487750201269552022.jpg",
    "https://bazaarvietnam.com/wp-content/uploads/2023/12/jennie-cuoi-nam-2023.jpg",
    "https://i.vgt.vn/2023/6/5/duong-duong-vuong-so-nhien-hoc-theo-song-joong-ki-song-hye-kyo-ket-cuc-gay-lo-lang-878-6920468.png",
    "https://static1.dienanh.net/upload/202112/e283eb3b-bb25-4972-a34e-56e056e158cf.jpeg",
    "https://kenh14cdn.com/203336854389633024/2021/8/25/lucasxx4441236985061001253387022640475335845486147249n-1629876799377366774228.jpg",
    "https://baogiaothong.mediacdn.vn/603483875699699712/2023/10/11/85-16970195881202021710736.jpg",
    "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/23/1171050/Chau-Vu-Dong.jpeg",
    "https://media.doisongphapluat.com/493/2019/7/31/Ly-Hien-Gun-than-ca-muc-ham-mat-15.jpg",
    "https://thegioidienanh.vn/stores/news_dataimages/2023/122023/13/09/screenshot-120231213091011.png?rt=20231213091039",
  ];

  const peopleData = [
    { name: "Kiều Dương" },
    { name: "Huỳnh Thắng" },
    { name: "Tú Uyên" },
    { name: "Hoàng Bảo" },
    { name: "Văn Bảo" },
    { name: "Thiên Bâng" },
    { name: "Nguyễn Thị Hương" },
    { name: "Trần Thị Mai" },
    { name: "Lê Thị Lan" },
    { name: "Nguyễn Văn An" },
    { name: "Trần Minh Đức" },
    { name: "Lê Thành Long" },
    { name: "Phạm Quang Huy" },
    { name: "Hoàng Văn Nam" },
    { name: "Đặng Tuấn Anh" },
    { name: "Phạm Thị Thu" },
    { name: "Vũ Hoàng Nam" },
    { name: "Nguyễn Đình Hòa" },
    { name: "Trần Văn Bình" },
    { name: "Vũ Thị Lan Anh" },
    { name: "Đặng Thị Hà" },
    { name: "Lý Hiện" },
    { name: "Song Kang" },
  ];

  const FriendRequest = () => {
    navigation.navigate("FriendRequest");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, color: "#00AE72", fontWeight: "bold" }}>
            Danh Bạ
          </Text>
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={FriendRequest} style={styles.touchAddFriend}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6469/6469169.png",
            }}
            style={{ height: 50, width: 50 }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 18, marginLeft: 10 }}>
              Lời mời kết bạn
            </Text>
          </View>
        </TouchableOpacity>
        {peopleData.map((person, index) => (
          <TouchableOpacity key={index} style={styles.touchChat}>
            <Image
              source={{ uri: avatar_imgs[index % avatar_imgs.length] }}
              style={styles.avatar}
            />
            <View style={styles.viewChat}>
              <Text style={styles.userName}>{person.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
  },
  touchAddFriend: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#00AE72",
    backgroundColor: "#F9F9F9",
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 360,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewChat: {
    marginLeft: 10,
    width: "100%",
    justifyContent: "center",
  },
  touchChat: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    height: 70,
  },
});

export default AllPeople;
