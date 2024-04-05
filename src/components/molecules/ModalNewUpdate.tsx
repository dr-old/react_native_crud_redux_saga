import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import {styles} from '../../utils';
import {color} from '../../utils/styles';

interface ModalNewUpdateProps {
  progress?: any;
}

const ModalNewUpdate: React.FC<ModalNewUpdateProps> = ({progress}) => {
  return (
    <Modal visible={true} transparent>
      <View style={stylesCust.container}>
        <View style={stylesCust.body}>
          <Text style={styles.h4(color.white, 'center')}>In Progress...</Text>
          <View style={stylesCust.progress}>
            <Text style={styles.p3(color.white5)}>{`${(
              Number(progress?.receivedBytes) / 1048576
            ).toFixed(2)}MB/${(Number(progress?.totalBytes) / 1048576).toFixed(
              2,
            )}`}</Text>
            <ActivityIndicator style={stylesCust.loading} color={color.white} />
            <Text style={styles.p3(color.white5)}>
              {(
                (Number(progress?.receivedBytes) /
                  Number(progress?.totalBytes)) *
                100
              ).toFixed(0)}
              %
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const stylesCust = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: color.background1,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: 200,
    width: 200,
  },
  progress: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loading: {marginVertical: 8},
});

export default ModalNewUpdate;
