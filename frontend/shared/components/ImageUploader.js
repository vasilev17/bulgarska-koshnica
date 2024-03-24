import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTSIZES, icons } from "../constants";
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

const ImageUploader = (props) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const uploadImage = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [17, 10], // or 14, 10
        quality: 1,
      });
      if (!result.canceled) {
        await setUploadedImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
    }
  };

  return (
    <TouchableOpacity
      onPress={uploadImage}
      style={[styles.container, props.style]}
    >
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 43 }}
        source={uploadedImage && { uri: uploadedImage }}
      >
        {uploadedImage && <View style={styles.overlay} />}

        <View style={styles.uploaderContent}>
          <Image
            style={styles.addImageIcon}
            source={uploadedImage ? icons.newImage : icons.addImage}
          />
          <CustomText
            style={[styles.title, uploadedImage && { color: COLORS.white }]}
          >
            {uploadedImage ? "Промяна на снимка" : "Качване на снимка"}
          </CustomText>
        </View>
      </ImageBackground>
      {uploadedImage && (
        <TouchableOpacity
          onPress={() => setUploadedImage(null)}
          style={styles.deleteContainer}
        >
          <Image style={styles.deleteIcon} source={icons.deleteBin} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 225,
    borderWidth: 2,
    borderRadius: 45,
    borderColor: COLORS.primary,
  },
  addImageIcon: {
    height: 55,
    aspectRatio: 1,
  },
  title: {
    fontSize: FONTSIZES.size24,
    color: COLORS.gray,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 45,
    opacity: 0.25,
    zIndex: 0,
  },
  uploaderContent: {
    alignItems: "center",
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
  },
  deleteIcon: {
    width: 17,
    height: 22,
  },
  deleteContainer: {
    position: "absolute",
    right: -7,
    bottom: 186,
    width: 42,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
