import React from 'react';
import type {Node} from 'react';

import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import Colors from '../utils/Colors';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
        numberOfLines={4}>
        {children}
      </Text>
    </View>
  );
};

function ArticleComponent() {
  return (
    <Section title="Articles">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet
      malesuada ex, consectetur convallis erat. Sed viverra id metus in
      eleifend. Curabitur sit amet blandit augue, in varius sem. Donec iaculis
      diam non egestas ornare. Aliquam fermentum velit ut finibus efficitur.
      Nunc dignissim eget lectus at egestas. Quisque at sodales massa. Nunc
      iaculis ligula ut nulla aliquet ultrices. Pellentesque at auctor leo. Duis
      placerat enim quis sapien mattis convallis. Sed placerat non ante in
      malesuada. Etiam et vestibulum mauris. Nulla sem lectus, feugiat nec lacus
      id, imperdiet eleifend sapien.
    </Section>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 42,
    fontWeight: '700',
  },
  sectionDescription: {
    marginTop: 21,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 26,
  },
  sectionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
});

export default ArticleComponent;
