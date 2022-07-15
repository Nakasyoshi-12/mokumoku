import { useState } from "react";
import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";

const INITIAL_DATE = moment().format("YYYY-MM-DD");
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const handleDayPress = (day) => {
    setSelected(day.dateString);
  };
  return (
    <View style={styles.container}>
      <Calendar
        monthFormat={"yyyy年 MM月"}
        current={INITIAL_DATE}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "pink",
            selectedTextColor: "white",
          },
        }}
        onDayPress={handleDayPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
  },
});
