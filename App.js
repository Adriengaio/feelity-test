/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Pressable,
  Text,
  Alert,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

import HeaderComponent from './src/components/HeaderComponent';
import Colors from './src/utils/Colors';
import SliderComponent from './src/components/SliderComponent';
import ArticleComponent from './src/components/ArticleComponent';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <HeaderComponent />
        <SliderComponent />
        <ArticleComponent style={styles.articleContainer} />
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Commencer à lire pressed')}>
          <Text style={styles.textButton}>Commencer à lire</Text>
          <View style={[styles.iconContainer, styles.iconContainerShadowDrop]}>
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 34,
    marginHorizontal: 20,
    paddingVertical: 17,
    paddingHorizontal: 22,
    elevation: 3,
    backgroundColor: Colors.lighter,
    color: Colors.black,
    borderRadius: 22,
  },
  textButton: {
    fontSize: 18,
    fontWeight: '700',
  },
  iconContainer: {
    borderRadius: 12,
    backgroundColor: Colors.white,
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  iconContainerShadowDrop: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
});

export default App;
