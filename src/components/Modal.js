import React from 'react';
import { StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';

const Modal = ({ isVisible = false, setVisible = () => {}, children }) => {
  return (
    <Overlay
      isVisible={isVisible}
      overlayStyle={styles.overlay}
      onBackdropPress={() => setVisible(false)}
    >
      {children}
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: '90%',
    backgroundColor: '#f1f1f1',
    borderRadius: 50,
    padding: 30,
  },
});

export default Modal;
