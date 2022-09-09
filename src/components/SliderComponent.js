import React, {useState} from 'react';

import {PageSlider} from '@pietile-native-kit/page-slider';
import DeviceInfo from 'react-native-device-info';
import {StyleSheet, View, ImageBackground} from 'react-native';
import Colors from '../utils/Colors';

import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';

const imageService1 = service1;
const imageService2 = service2;

function SliderComponent() {
  const [selectedPage, setSelectedPage] = useState(0);
  let isTablet = DeviceInfo.isTablet();
  const handleCurrentPageChange = currentPage => {
    //console.log(currentPage);
  };

  const pageMargin = isTablet ? 9 : 9;
  const peek = isTablet ? 200 : 36;

  return (
    <PageSlider
      style={styles.cardSlider}
      mode="card"
      selectedPage={selectedPage}
      pageMargin={pageMargin}
      peek={peek}
      onCurrentPageChange={handleCurrentPageChange}
      onSelectedPageChange={setSelectedPage}>
      <View
        style={[
          styles.card,
          {backgroundColor: Colors.white},
          styles.shadowDrop,
        ]}>
        <ImageBackground
          accessibilityRole="image"
          testID="article-image-2"
          source={imageService1}
          style={styles.images}></ImageBackground>
      </View>
      <View
        style={[
          styles.card,
          {backgroundColor: Colors.white},
          styles.shadowDrop,
        ]}>
        <ImageBackground
          accessibilityRole="image"
          testID="article-image-2"
          source={imageService2}
          style={styles.images}></ImageBackground>
      </View>
    </PageSlider>
  );
}

const styles = StyleSheet.create({
  cardSlider: {
    width: '100%',
    marginTop: -75 + 14,
    paddingBottom: 46,
  },
  card: {
    alignItems: 'center',
    height: 285,
    width: 300,
    justifyContent: 'center',
    padding: 16,
    borderRadius: 22,
  },
  images: {
    width: 276,
    height: 262,
  },
  shadowDrop: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 30,
  },
});

export default SliderComponent;
