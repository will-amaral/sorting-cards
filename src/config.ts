import { Dimensions } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { DataType } from './data';

const { width } = Dimensions.get('window');
export const MARGIN = 8;
export const SIZE = width / 2 - MARGIN;
export const COL = 2;

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 350,
};

export const getPosition = (position: number) => {
  'worklet';
  return {
    x: position % COL === 0 ? 0 : SIZE,
    y: Math.floor(position / COL) * SIZE,
  };
};

export const getOrder = (tx: number, ty: number, max: number) => {
  'worklet';
  const x = Math.round(tx / SIZE) * SIZE;
  const y = Math.round(ty / SIZE) * SIZE;
  const row = Math.max(y, 0) / SIZE;
  const col = Math.max(x, 0) / SIZE;
  return Math.min(row * COL + col, max);
};

export const getObject = (arr: DataType) =>
  Object.assign({}, ...arr.map((item, index) => ({ [item.id]: index })));

export type Positions = {
  [id: string]: number;
};
