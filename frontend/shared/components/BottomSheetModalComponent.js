import { Image, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { images } from "../constants";
import BottomSheetHandleComponent from "./BottomSheetHandleComponent";
import PropTypes, { number } from "prop-types";

const BottomSheetModalComponent = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => props.snapPoints, []);
  const bottomsheetModalBackrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        backdropComponent={
          props.hasBackdrop === true && bottomsheetModalBackrop
        }
        handleComponent={() => (
          <BottomSheetHandleComponent title={props.title} titleWidth={props.titleWidth}/>
        )}
      >
        <BottomSheetScrollView
          contentContainerStyle={styles.sheetContainer}
          showsVerticalScrollIndicator={false}
        >
          <BottomSheetView>{props.children}</BottomSheetView>

          {props.hasFooter && (
            <Image style={styles.footerWave} source={images.footerWaveEmpty} />
          )}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

BottomSheetModalComponent.propTypes = {
  snapPoints: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(number),
  ]).isRequired,
  title: PropTypes.string,
  hasFooter: PropTypes.bool.isRequired,
  hasBackdrop: PropTypes.bool.isRequired,
  titleWidth: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

BottomSheetModalComponent.defaultProps = {
  hasFooter: true,
  hasBackdrop: true,
  titleWidth: 210,
};

export default BottomSheetModalComponent;

const styles = StyleSheet.create({
  sheetContainer: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footerWave: {
    width: "100%",
    height: 154,
    zIndex: -1,
  },
});
