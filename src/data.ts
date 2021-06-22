export default [
  { id: 1, color: '#00B2EF', done: true },
  { id: 2, color: '#00B2EF', done: true },
  { id: 3, color: '#FF0078', done: false },
  { id: 4, color: '#FF0078', done: false },
  { id: 5, color: '#00B2EF', done: true },
  { id: 6, color: '#FF0078', done: false },
  { id: 7, color: '#00B2EF', done: true },
  { id: 8, color: '#FF0078', done: false },
];

export type DataType = {
  id: number;
  color: string;
  done: boolean;
}[];
