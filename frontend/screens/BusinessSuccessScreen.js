import { StyleSheet } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import {
  COLORS,
  FONT,
  FONTSIZES,
  FOOTERSTYLES,
  SIZES,
} from "../shared/constants";
import animations from "../shared/constants/animations";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import CustomText from "../shared/components/CustomText";
import { globalStyles } from "../shared/globalStyles";
import CustomButton from "../shared/components/CustomButton";

const BusinessSuccessScreen = () => {
  const tickAnimationRef = useRef(null);

  return (
    <BaseAppComponent
      contentOffset={"15%"}
      screenHeaderTitle="Обектът Ви беше изпратен за одобрение успешно!"
      footerWaveType={FOOTERSTYLES.footerEmpty}
      hasHeaderIcon={false}
      isHeaderBold={true}
    >
      <LottieView
        style={{ width: 400, aspectRatio: 1, marginTop: "-20%" }}
        source={animations.shop}
        onAnimationFinish={() => tickAnimationRef.current?.play()}
        loop={false}
        autoPlay
      />
      <LottieView
        ref={tickAnimationRef}
        style={{
          width: 100,
          aspectRatio: 1,
          marginTop: "-65%",
        }}
        source={animations.tick}
        loop={false}
      />
      <CustomText
        style={[
          globalStyles.infoText,
          {
            fontSize: FONTSIZES.size24,
            textAlign: "center",
            color: COLORS.primary,
            fontFamily: FONT.italic,
          },
          { marginTop: "30%" },
        ]}
      >
        <CustomText style={[styles.highlightedText, { color: COLORS.orange }]}>
          След проверка
        </CustomText>{" "}
        локацията Ви ще бъде достъпна{" "}
        <CustomText style={[styles.highlightedText, { color: COLORS.primary }]}>
          за всички!
        </CustomText>
      </CustomText>

      <CustomButton
        size={SIZES.large}
        buttonColor={COLORS.secondary}
        fontColor={COLORS.white}
        hasShadow={true}
        style={{ marginTop: "8%" }}
      >
        Към Картата
      </CustomButton>
    </BaseAppComponent>
  );
};

export default BusinessSuccessScreen;

const styles = StyleSheet.create({
  highlightedText: {
    fontFamily: FONT.boldItalic,
    fontSize: FONTSIZES.size24,
  },
});
