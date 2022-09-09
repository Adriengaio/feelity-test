/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {Node} from 'react';
import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import logo from '../assets/feelityLogo.png';

const feelityLogo = logo;

const HeaderComponent = (): Node => {
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="feelityLogo"
      source={feelityLogo}
      style={[
        styles.background,
        {
          backgroundColor: Colors.darker,
        },
      ]}
      imageStyle={styles.logo}>
      <Text
        style={[
          styles.text,
          {
            color: Colors.white,
          },
        ]}>Services
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 75,
    paddingTop: 96,
    paddingHorizontal: 19,
  },
  logo: {
    overflow: 'visible',
    flex: 1,
    justifyContent: "center",
    marginLeft: 114,
    marginTop: 43.44,
    width: 147,
    height: 25,
  },
  text: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'left',
  },
});

export default HeaderComponent;
