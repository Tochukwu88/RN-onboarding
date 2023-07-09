import {Image, StyleSheet, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

function OnboardingScreen({navigation}): JSX.Element {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.imageContainer}>
              <Image
                style={styles.images}
                source={require('../assests/img1.png')}
              />
            </View>
          ),

          title: 'Happiness',
          subtitle: 'Have time for loved ones',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.imageContainer}>
              <Image
                style={styles.images}
                source={require('../assests/img2.png')}
              />
            </View>
          ),
          title: 'Marketing',
          subtitle: 'Reachout to more people',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.imageContainer}>
              <Image
                style={styles.images}
                source={require('../assests/img3.png')}
              />
            </View>
          ),
          title: 'Success',
          subtitle: 'Reach the stars',
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: '100%',

    objectFit: 'contain',
  },
  imageContainer: {
    height: 300,
    width: 300,
  },
});

export default OnboardingScreen;
