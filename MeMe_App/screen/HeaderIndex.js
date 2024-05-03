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

export default HeaderIndex = ({ navigation }) => {
  let header__imgs = [
    "https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/esskl98l5b52i8rag9jq.png",
    "https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/klasfpxswxaglw2ujbtn.png",
    "https://res.cloudinary.com/dpigoorhc/image/upload/v1699300339/onlyfan/index/Icon/kliot9ffm7bupw2z7h0a.webp",
    "https://cdn-icons-png.flaticon.com/512/6469/6469169.png",
    "https://res.cloudinary.com/dpigoorhc/image/upload/f_auto,q_auto/v1/onlyfan/index/Icon/pyhiltqmgy54j36rwf3z",
  ];

  return (
    <SafeAreaView style={[styles.header]}>
      <View style={[styles.row1, styles.f__center, styles.f__sb]}>
        <View>
          {/* <TouchableOpacity
            style={styles.header__item}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image source={{ uri: header__imgs[0] }} style={styles.icon} />
          </TouchableOpacity> */}
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "#00AE72", fontWeight: "bold", marginLeft: 50 }}>
            Đoạn chat
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.header__item}>
            <Image
              source={{ uri: header__imgs[3] }}
              style={{ height: 40, width: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row2}>
        <Image source={{ uri: header__imgs[1] }} style={styles.icon} />
        <TextInput placeholder="Search" style={{ width: 341, 
            marginLeft: 10,
            height: 40,
            borderColor: '#00AE72', 
            borderWidth: 1,
            borderRadius: 20,
            paddingLeft: 20,
            color: '#333'}}></TextInput>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  f__sb: {
    justifyContent: "space-between",
  },
  f__center: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrap: {
    flexWrap: "wrap",
  },

  header: {
    height: 100,
    color: "hsl(0,0%,96.86%)",
    borderBottomColor: "#00AE72",
    borderBottomWidth: 1,
  },
  row1: {
    flexDirection: "row",
    width: "100%",
  },
  row2: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    height: 40
  },
  header__item: {
    marginHorizontal: 10,
  },
  logo: {
    width: 170,
    height: 35,
  },
  icon: {
    width: 25,
    height: 25,
    marginTop: 6,
    marginLeft: 5,
    backfaceVisibility: "hidden",
    opacity: 0.7
  },
});
