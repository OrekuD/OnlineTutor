import { ImageRequireSource } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  ProfileSettings: undefined;
  PaymentSettings: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  Mentor: {
    item: MentorObj;
  };
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
