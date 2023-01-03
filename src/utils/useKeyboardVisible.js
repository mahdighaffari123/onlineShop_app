import { useState, useEffect } from "react";
import { Keyboard, Platform } from "react-native";

export const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const show = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
  const hide = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(show, () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener(hide, () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};
