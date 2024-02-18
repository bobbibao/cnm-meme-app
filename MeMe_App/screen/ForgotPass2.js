import { TextInput } from "@react-native-material/core";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;
const CELL_SIZE = 40;
const CELL_MARGIN = 10;

export default function ForgotPass2({ navigation }) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleSubmit = () => {
    // TODO: add your logic to handle the confirmation code
    // For example, you can call a function to verify the code
    // or navigate to another screen
    Alert.alert("Your confirmation code is " + value);
  };
  const Next = () => {
    navigation.navigate("ResetPass");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/logoMeme.png")}
          style={{ height: 325, width: 332.15, alignItems: "center" }}
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "sans-serif",
        }}
      >
        Nhập mã xác nhận
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 14,
          color: "gray",
          fontFamily: "sans-serif",
        }}
      >
        Mã xác thực sẽ được gửi qua email hoặc số điện thoại
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeField}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              !symbol && { backgroundColor: "#fff" },
            ]}
          >
            <Cursor />
            {symbol || (isFocused ? <Cursor /> : null)}
          </View>
        )}
        onSubmitEditing={handleSubmit}
      />
      <Text>Bạn chưa nhận được?</Text>
      <TouchableOpacity>
        <Text
          style={{
            color: "#508BE3",
            fontSize: 14,
            marginTop: 10,
            fontFamily: "sans-serif",
          }}
        >
          Gửi lại
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Next()}
        style={{
          width: 146,
          height: 36,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00AE72",
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 14, color: "#FFF" }}>Tiếp theo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  viewInput: {
    flexDirection: "row",
  },
  input: {
    width: 50,
    height: 50,
    marginTop: 20,
    margin: 5,
  },
  codeField: {
    width: CELL_COUNT * (CELL_SIZE + 2 * CELL_MARGIN),
    height: CELL_SIZE + 2 * CELL_MARGIN,
    marginTop: 20,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    lineHeight: CELL_SIZE,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "sans-serif",
    color: "#000",
  },
  focusCell: {
    borderColor: "#000",
  },
});
