import React, { useEffect, useState } from "react";
import { Modal, Platform, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { style } from "./styles";
import { themes } from "../../global/themes";

type Props = {
  type: "date" | "time";
  onDateChange: (date: Date) => void;
  show: boolean;
  setShow: (show: boolean) => void;
};

const CustomDateTimePicker = ({ type, onDateChange, show, setShow }: Props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if(onDateChange) {
        onDateChange(date)
    }
  }, [date, onDateChange]);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
    }

    if (Platform.OS === "android") {
      setShow(false);
    }
  };

  return (
    <Modal transparent visible={show} onRequestClose={() => setShow(false)}>
      <View style={style.modalOverlay}>
        <View
          style={[
            style.container,
            Platform.OS === "android" && { backgroundColor: "transparent" },
          ]}
        >
          <DateTimePicker
            value={date}
            mode={type}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onChange}
            textColor="#000"
            
          />

          {Platform.OS === "ios" && (
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center", backgroundColor: themes.colors.primary, width: 120, height: 32, borderRadius: 10}}
                onPress={() => setShow(false)}
              >
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16}}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomDateTimePicker;
