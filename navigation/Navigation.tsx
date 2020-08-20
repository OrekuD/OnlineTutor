import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  BottomTabParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from "../types";
import { Home, PaymentSettings, Profile, ProfileSettings } from "../screens";
import { Feather } from "@expo/vector-icons";
import { purple } from "../constants/Colors";
import { useAppContext } from "../context/Context";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings} />
      <ProfileStack.Screen name="PaymentSettings" component={PaymentSettings} />
    </ProfileStack.Navigator>
  );
};

const MainNavigation = () => {
  const { tabBarVisible } = useAppContext();
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 65,
        },
        activeTintColor: purple,
        keyboardHidesTabBar: true,
      }}
      screenOptions={{
        tabBarVisible,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="compass" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
