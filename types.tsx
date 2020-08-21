import { ImageRequireSource } from "react-native";

export type RootStackParamList = {
  Main: undefined;
  Mentor: {
    item: MentorObj;
  };
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  ProfileSettings: undefined;
  PaymentSettings: undefined;
};

export interface AppContext {
  tabBarVisible: boolean;
  setTabBarState: (state: boolean) => void;
}

export interface MentorObj {
  id: string;
  name: string;
  image: ImageRequireSource;
  rating: number;
  price: string;
  experience: string;
  role: {
    image: ImageRequireSource;
    name: string;
  };
  about: string;
}
