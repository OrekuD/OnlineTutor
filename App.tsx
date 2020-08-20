import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation/Navigation";
import { LoadingScreen } from "./components";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <LoadingScreen />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    );
  }
}
