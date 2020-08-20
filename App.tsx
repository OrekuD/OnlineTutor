import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation/Navigation";
import { LoadingScreen } from "./components";
import { Provider } from "./context/Context";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <LoadingScreen />;
  } else {
    return (
      <SafeAreaProvider>
        <Provider>
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
