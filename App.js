import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import woodsIm from "./two_roads.jpeg";
import pokeb from "./Poke_Ball.webp";
import winner from "./winn.jpeg";
import river from "./river_twice.jpeg";
const Stack = createNativeStackNavigator();
let deviceW = Dimensions.get("screen").width;
let deviceH = Dimensions.get("screen").height;
let cn = 1;

const MyStack = () => {
  const [activated, setActivated] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={HomeScreen}
          options={{ title: "PokeRoi" }}
          initialParams={{ isActivated: activated }}
        />
        <Stack.Screen name="pg1" component={ProfileScreen} />
        <Stack.Screen name="pg2" component={GP1} />
        <Stack.Screen name="pg3" component={GP2} />
        <Stack.Screen name="pg4" component={GP3} />
        <Stack.Screen name="pg5" component={GP4} />
        <Stack.Screen name="pg6" component={GP5} />
        <Stack.Screen name="pg7" component={GP6} />
        <Stack.Screen name="pg8" component={GP7} />
        <Stack.Screen name="pgwint" component={WP} />
        <Stack.Screen name="pgdie" component={DP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container2}>
      <Button title="start?" onPress={() => navigation.navigate("pg1")} />
    </View>
  );
};

const Tx = () => {
  return <Text>abcd</Text>;
};

export default MyStack;

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image source={woodsIm} style={styles.image} />
      <Text style={styles.textn}>
        Two roads diverged in a yellow wood...Not really
      </Text>
      <Button title="Let's go" onPress={() => navigation.navigate("pg2")} />
    </View>
  );
};

const GP1 = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image source={pokeb} style={styles.imagePoke} />
      <Text style={styles.text}>
        You walked on the road, and saw a wild Roi standing in front of you
      </Text>
      <Button
        title="Run away from the dangerous Roi"
        onPress={() => navigation.navigate("pg3")}
      />
      <Button
        title="Try to capture Roi"
        onPress={() => navigation.navigate("pgdie")}
      />
    </View>
  );
};

const GP2 = ({ navigation, route }) => {
  let [cnt, setcnt] = useState(0);
  if (cnt < 1) {
    return (
      <View style={styles.container}>
        <Image source={woodsIm} style={styles.image} />
        <Text style={styles.textn}>
          Two roads diverged in a yellow wood...not really, still
        </Text>
        <Button
          title="last chance to give up and quit the game"
          onPress={() => navigation.navigate("Welcome")}
        />
        <Button
          title="Go back to the old road"
          onPress={() => {
            setcnt(cnt + 1);
            navigation.navigate("pg4");
          }}
        />
        <Button
          title="Go to the one with more woods"
          onPress={() => {
            setcnt(cnt + 1);
            navigation.navigate("pg6");
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.dend}>
        <Text style={styles.textn}>
          No one can step into the same exact river for a second time, you died
          because you tried to redo your decision here
        </Text>
        <Image source={river} style={styles.image} />
        <Button
          title="Go back to home page and restart"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    );
  }
};

const GP3 = ({ navigation, route }) => {
  let [count, setcount] = useState(0);
  if (count == 0) {
    return (
      <View style={styles.container}>
        <Image source={woodsIm} style={styles.image} />
        <Text style={styles.textn}>
          Nice, Roi is gone now, and you can keep going!
        </Text>
        <Button
          title="Keep Going"
          onPress={() => {
            setcount(count + 1);
            navigation.navigate("pg5");
          }}
        />
      </View>
    );
  } else if (count <= 20) {
    return (
      <View style={styles.container}>
        <Image source={woodsIm} style={styles.image} />
        <Text style={styles.textn}>
          Hummmmm...interesting. You have walked {count} steps forward
        </Text>
        <Button
          title="Keep Going"
          onPress={() => {
            setcount(count + 1);
            navigation.navigate("pg4");
          }}
        />
        <Button
          title="Secret route"
          onPress={() => {
            navigation.navigate("pg7");
          }}
        />
      </View>
    );
  } else if (count <= 40) {
    return (
      <View style={styles.container}>
        <Image source={woodsIm} style={styles.image} />
        <Text style={styles.text}>
          You have walked too far away and missed your chance to enter the
          secrete route, too bad
        </Text>
        <Button
          title="Keep Going"
          onPress={() => {
            setcount(count + 1);
            navigation.navigate("pg4");
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>YOU WIN</Text>
        <Text>YOU WIN</Text>
        <Text>He who persists wins, so YOU WIN</Text>
        <Text>WIN WIN WIN</Text>
        <Image source={winner} style={styles.imageWin} />
      </View>
    );
  }
};
const GP4 = ({ navigation, route }) => {
  let [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Image source={woodsIm} style={styles.image} />
      <Text>Hummmm...dead end?</Text>
    </View>
  );
};

const GP5 = ({ navigation, route }) => {
  let [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Image source={woodsIm} style={styles.image} />
      <Text style={styles.textn}>
        You walked to the road with more woods and found the wild Roi sleeping
      </Text>
      <Button
        title="capture Roi while he is sleeping"
        onPress={() => {
          setcount(count + 1);
          navigation.navigate("pgdie");
        }}
      />
    </View>
  );
};

const GP6 = ({ navigation, route }) => {
  let [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Image source={woodsIm} style={styles.image} />
      <Text style={styles.textn}>
        You followed the secret route and found Roi's secret place
      </Text>
      <Button
        title="capture Roi"
        onPress={() => {
          setcount(count + 1);
          navigation.navigate("pg8");
        }}
      />
      <Button
        title="escape"
        onPress={() => {
          setcount(count + 1);
          navigation.navigate("Welcome");
        }}
      />
    </View>
  );
};

const GP7 = ({ navigation, route }) => {
  let [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Image source={woodsIm} style={styles.image} />
      <Text style={styles.textn}>
        You successfully captured Roi! And Roi traded the ability to time travel
        for his freedom
      </Text>
      <Button
        title="back to the road diverged"
        onPress={() => {
          setcount(count + 1);
          navigation.navigate("pg2");
          navigation.navigate("pg3");
        }}
      />
      <Button
        title="rather not to time travel"
        onPress={() => {
          setcount(count + 1);
          navigation.navigate("pgwint");
        }}
      />
    </View>
  );
};

const WP = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>YOU WIN</Text>
      <Text>YOU WIN</Text>
      <Text>You are a time traveler now and you win!</Text>
      <Text>WIN WIN WIN</Text>
      <Image source={winner} style={styles.imageWin} />
    </View>
  );
};

const DP = ({ navigation, route }) => {
  if (cn <= 2) {
    return (
      <View style={styles.dend}>
        <Text style={styles.textn}>You died! For {cn} time.</Text>
        <Button
          title="Restart"
          onPress={() => {
            cn = cn + 1;
            navigation.navigate("pg1");
          }}
        />
      </View>
    );
  }
  if (cn <= 4) {
    return (
      <View style={styles.dend}>
        <Text style={styles.textn}>
          You died...SO MANY TIMES!!! you really suck at this game or you were
          trying to find some Easter Eggs?
        </Text>
        <Button
          title="Restart"
          onPress={() => {
            cn = cn + 1;
            navigation.navigate("pg1");
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.dend}>
        <Text>
          OK, since you manage to die for so many times in such a easy game, you
          WIN!!!
        </Text>
        <Text>
          OK, since you manage to die for so many times in such a easy game, you
          WIN!!!
        </Text>
        <Text>
          OK, since you manage to die for so many times in such a easy game, you
          WIN!!!
        </Text>
        <Text>WIN WIN WIN</Text>
        <Image source={winner} style={styles.imageWin} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  color: {
    flex: 1,
    backgroundColor: "#ffa",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: deviceH * 0.5,
    width: deviceW * 0.5,
  },
  imagePoke: {
    height: deviceH * 0.5,
    width: deviceW * 0.32,
  },
  imageWin: {
    height: deviceH,
    width: deviceW,
  },
  container: {
    backgroundColor: "#ffa",
    alignItems: "center",
    justifyContent: "center",
    width: deviceW * 1,
    height: deviceH * 1,
  },
  container2: {
    backgroundColor: "#dff",
    alignItems: "center",
    justifyContent: "center",
    width: deviceW * 1,
    height: deviceH * 1,
  },
  dend: {
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
    width: deviceW * 1,
    height: deviceH * 1,
  },
  center: {
    alignItems: "center",
    textShadowColor: "yellow",
  },
  text: {
    margin: 10,
    fontFamily: "serif",
    color: "red",
    fontSize: 23,
  },
  textn: {
    margin: 10,
    fontFamily: "sans-serif",
    fontSize: 23,
  },
});
