import React from 'react';
import { Button } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

import Square from './Square';
import { Positions, getObject } from './config';

function List(props: ListProps) {
  const { data } = props;
  const positions = useSharedValue<Positions>(getObject(data));

  const sortPink = () => {
    const sortedData = data.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
    positions.value = getObject(sortedData);
  };

  const sortBlue = () => {
    const sortedData = data.sort((a, b) => (a.done === b.done ? 0 : a.done ? -1 : 1));
    positions.value = getObject(sortedData);
  };

  const reset = () => {
    const resetedData = data.sort((a, b) => (a.id > b.id ? 1 : -1));
    positions.value = getObject(resetedData);
  };

  return (
    <>
      <Button onPress={sortPink} title='Rosa primeiro' />
      <Button onPress={sortBlue} title='Azul primeiro' />
      <Button onPress={reset} title='Resetar' />

      <Animated.View>
        {data.map((item) => {
          return (
            <Square key={item.id} positions={positions} id={item.id} color={item.color} />
          );
        })}
      </Animated.View>
    </>
  );
}

type ListProps = {
  data: {
    id: number;
    color: string;
    done: boolean;
  }[];
};

export default List;
