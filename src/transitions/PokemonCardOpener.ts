import { Animated } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { StackCardInterpolationProps, StackCardInterpolatedStyle } from '@react-navigation/stack';

const config = {
  animation: 'timing',
  config: {
    duration: '250',
    useNativeDriver: true
  },
};

const PokemonCardOpener: StackNavigationOptions = {
  transitionSpec: {
    open: config,
    close: config
  },
  cardStyleInterpolator: ({ 
    current: { progress },
    inverted,
    layouts: { screen },
  }: StackCardInterpolationProps): StackCardInterpolatedStyle => {
    const translateY = Animated.multiply(
      progress.interpolate({
        inputRange: [0, 1],
        outputRange: [screen.height, 0],
        extrapolate: 'clamp',
      }),
      inverted
    );
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
  
    return {
      cardStyle: {
        opacity,
        transform: [
          // Translation for the animation of the current card
          { translateY },
        ],
      },
    };
  },
};

export default PokemonCardOpener;