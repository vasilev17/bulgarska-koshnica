import { StyleSheet, Text, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import TagComponent from "./TagComponent";
import CustomText from "./CustomText";

const TagInput = (props) => {
  const inputRef = useRef();
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const [tags, setTags] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  function trimChars(str, charsToRemove) {
    const escapedChars = charsToRemove
      .map((char) => char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");

    const regex = new RegExp(`^(${escapedChars})+|(${escapedChars})+$`, "g");

    return str.replace(regex, "");
  }

  handleTextInput = (event) => {
    let currentPosition = event.nativeEvent.selection.start;

    setTextInput(textInput.replace(/ +/g, " "));

    if (textInput.trim() === "" || trimChars(textInput, [",", " "]) === "") {
      setTextInput("");
      return;
    }

    if (
      (currentPosition === 1 && textInput[0] === " ") ||
      textInput[currentPosition - 1] === ","
    ) {
      if (currentPosition < textInput.length) {
        setTextInput(
          textInput.slice(0, currentPosition - 1) +
            textInput.slice(currentPosition)
        );
        return;
      } else {
        if (tags.length < 10) {
          setTags([...tags, textInput.substring(0, textInput.length - 1)]);
          setTextInput("");
        }
      }
    }
  };

  removeTag = (index) => {
    setTags(tags.filter((element, elementIndex) => elementIndex !== index));
    if (tags.length === 1) {
      setShowPlaceholder(true);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={[styles.container, props.style]}
      onPress={() =>
        isTextInputFocused ? inputRef.current.blur() : inputRef.current.focus()
      }
    >
      {tags.map((tag, index) => (
        <TagComponent
          key={index}
          title={tag}
          removeMethod={() => removeTag(index)}
        />
      ))}

      <TextInput
        ref={inputRef}
        maxLength={27}
        selectionColor={COLORS.primary}
        style={styles.input}
        value={textInput}
        placeholder={
          showPlaceholder
            ? ""
            : tags.length < 10
            ? "дума,"
            : "Достигнахте 10 думи!"
        }
        placeholderTextColor={tags.length >= 10 ? COLORS.red : "#a1a1a1"}
        onFocus={() => {
          setIsTextInputFocused(true);
          setShowPlaceholder(false);
        }}
        onBlur={() => {
          setIsTextInputFocused(false);
          textInput === "" && tags.length === 0 && setShowPlaceholder(true);
        }}
        onChangeText={(text) => setTextInput(text)}
        onSelectionChange={(event) => handleTextInput(event)}
      />

      {showPlaceholder && (
        <CustomText style={styles.placeholder}>
          Въведете до 10 ключови думи (разделени със запетая), чрез които ще
          бъдете намирани по-лесно. Тези думи могат да бъдат продукти и/или
          описание на дейността Ви.
        </CustomText>
      )}
    </TouchableWithoutFeedback>
  );
};

TagInput.propTypes = {
  style: Text.propTypes.style,
};

export default TagInput;

const styles = StyleSheet.create({
  container: {
    width: 355,
    height: 380,
    borderColor: COLORS.primary,
    borderWidth: 2,
    shadowColor: "black",
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
  input: {
    fontSize: FONTSIZES.size18,
    fontFamily: FONT.regular,
    color: COLORS.text,
    flexGrow: 1,
  },
  placeholder: {
    textAlign: "center",
    fontSize: FONTSIZES.size24,
    width: 310,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "7%",
  },
});
