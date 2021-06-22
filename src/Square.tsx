import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useAnimatedReaction,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

import { animationConfig, getPosition, Positions, MARGIN, SIZE } from './config';

const Square = (props: SquareProps) => {
  const { color, positions, id } = props;

  const position = getPosition(positions.value[id]!);
  const translateX = useSharedValue(position.x);
  const translateY = useSharedValue(position.y);

  useAnimatedReaction(
    () => positions.value[id]!,
    (newOrder) => {
      const pos = getPosition(newOrder);
      translateX.value = withTiming(pos.x, animationConfig);
      translateY.value = withTiming(pos.y, animationConfig);
    }
  );

  const style = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: SIZE,
      height: SIZE,
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={style}>
      <Animated.View style={StyleSheet.absoluteFill}>
        <View style={styles.container} pointerEvents='none'>
          <View style={{ ...styles.tile, backgroundColor: color }} />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

type SquareProps = {
  color: string;
  positions: Animated.SharedValue<Positions>;
  id: number;
};

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
  },
  tile: {
    flex: 1,
    margin: MARGIN * 2,
    borderRadius: MARGIN,
  },
});

export default Square;
