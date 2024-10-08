import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
