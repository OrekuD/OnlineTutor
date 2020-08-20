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

export interface AppContext {
  tabBarVisible: boolean;
  setTabBarState: (state: boolean) => void;
}
