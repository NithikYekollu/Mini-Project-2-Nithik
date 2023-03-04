import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const {movieItem}= route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Image style ={{resizeMode:"contain", alignSelf: "center", height:200, width: 200}}source = {{uri: movieItem.posterurl}}/>
        <Text style={styles.h1}>{movieItem.title}</Text>
        <Text style={styles.h2}>Released {movieItem.year}</Text>
        <Text style={styles.h2}>{movieItem.genres?.join(", ")}</Text>
        <Text style={styles.h3}>{movieItem.actors?.join(", ")}</Text>
        <Text style={styles.h4}>{movieItem.storyline}</Text>
        
      </ScrollView>
    </SafeAreaView>
  );
}
