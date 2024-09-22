import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Button
} from "react-native";
import PopularCards from "./PopularCards";
import BannerCard from "./BannerCard";

// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({navigation}: HomeProps) {
  const isDarkMode = useColorScheme() === 'dark'

  return(
    <SafeAreaView>
      <ScrollView>
        <BannerCard />
        <PopularCards />
        <Button
        title='Go to Account'
        onPress={() => navigation.navigate(
          "Account", 
          {uid: 86}
        )}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const elStyles = StyleSheet.create({
  core: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#555555'
  },
  bannerMLight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#0598ce'
  },
  pageMLight: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  }
})

const textStyles = StyleSheet.create({
  darkMText: {
    color: '#FFFFFF'
  },
  lightMText: {
    color: '#000000'
  }
})