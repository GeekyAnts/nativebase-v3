export interface IColorHues {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  critical: '#d42f77',
  caution: '#f7c744',
  positive: '#408728',
  neutral: '#747474',
  info: '#274788',
  promote: '#8c5bb2',
  success: { 0: '#c6f7d4', 1: '#21543d', 2: '#38a169' },
  danger: { 0: '#f8d7d9', 1: '#731c23', 2: '#e53e3e' },
  warning: { 0: '#fff3cd', 1: '#866407', 2: '#f7bd45' },
  muted: { 0: '#e2e3e5', 1: '#65696d', 2: '#acacac' },
  dark: { 0: '#d5d8d9', 1: '#1b1f22', 2: '#004466' },
  light: { 0: '#fefefe', 1: '#818182', 2: '#f8f9fb' },
  default: { 0: '#c3dafe', 1: '#434190', 2: '#5a67d8' },
  gray: {
    0: '#F7FAFC',
    1: '#EDF2F7',
    2: '#E2E8F0',
    3: '#CBD5E0',
    4: '#A0AEC0',
    5: '#718096',
    6: '#4A5568',
    7: '#2D3748',
    8: '#1A202C',
    9: '#171923',
  },
  red: {
    0: '#FFF5F5',
    1: '#FED7D7',
    2: '#FEB2B2',
    3: '#FC8181',
    4: '#F56565',
    5: '#E53E3E',
    6: '#C53030',
    7: '#9B2C2C',
    8: '#822727',
    9: '#63171B',
  },
  orange: {
    0: '#FFFAF0',
    1: '#FEEBC8',
    2: '#FBD38D',
    3: '#F6AD55',
    4: '#ED8936',
    5: '#DD6B20',
    6: '#C05621',
    7: '#9C4221',
    8: '#7B341E',
    9: '#652B19',
  },

  yellow: {
    0: '#FFFFF0',
    1: '#FEFCBF',
    2: '#FAF089',
    3: '#F6E05E',
    4: '#ECC94B',
    5: '#D69E2E',
    6: '#B7791F',
    7: '#975A16',
    8: '#744210',
    9: '#5F370E',
  },

  green: {
    0: '#F0FFF4',
    1: '#C6F6D5',
    2: '#9AE6B4',
    3: '#68D391',
    4: '#48BB78',
    5: '#38A169',
    6: '#2F855A',
    7: '#276749',
    8: '#22543D',
    9: '#1C4532',
  },

  teal: {
    0: '#E6FFFA',
    1: '#B2F5EA',
    2: '#81E6D9',
    3: '#4FD1C5',
    4: '#38B2AC',
    5: '#319795',
    6: '#2C7A7B',
    7: '#285E61',
    8: '#234E52',
    9: '#1D4044',
  },

  blue: {
    0: '#ebf8ff',
    1: '#bee3f8',
    2: '#90cdf4',
    3: '#63b3ed',
    4: '#4299e1',
    5: '#3182ce',
    6: '#2b6cb0',
    7: '#2c5282',
    8: '#2a4365',
    9: '#1A365D',
  },

  cyan: {
    0: '#EDFDFD',
    1: '#C4F1F9',
    2: '#9DECF9',
    3: '#76E4F7',
    4: '#0BC5EA',
    5: '#00B5D8',
    6: '#00A3C4',
    7: '#0987A0',
    8: '#086F83',
    9: '#065666',
  },

  purple: {
    0: '#FAF5FF',
    1: '#E9D8FD',
    2: '#D6BCFA',
    3: '#B794F4',
    4: '#9F7AEA',
    5: '#805AD5',
    6: '#6B46C1',
    7: '#553C9A',
    8: '#44337A',
    9: '#322659',
  },

  pink: {
    0: '#FFF5F7',
    1: '#FED7E2',
    2: '#FBB6CE',
    3: '#F687B3',
    4: '#ED64A6',
    5: '#D53F8C',
    6: '#B83280',
    7: '#97266D',
    8: '#702459',
    9: '#521B41',
  },
  indigo: {
    0: '#ebf4ff',
    1: '#c3dafe',
    2: '#a3bffa',
    3: '#7f9cf5',
    4: '#667eea',
    5: '#5a67d8',
    6: '#4c51bf',
    7: '#434190',
    8: '#3c366b',
  },
};

export default colors;
export type IColors = typeof colors;
