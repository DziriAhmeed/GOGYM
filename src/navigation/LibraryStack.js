import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryScreen from "../screens/LibraryScreen/LibraryScreen";
import { ChestExercises } from "../screens/ChestExercies/ChestExercices";
import { BicepsExercises } from "../screens/BicepsExercices/BicepsExercices";
import { AbsExercices } from "../screens/AbsScreen/AbsExercices";
const Stack = createNativeStackNavigator();

function LibStack() {
  return (
    <Stack.Navigator initialRouteName="Library">
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          headerStyle: {
            backgroundColor: "#191418",
          },
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 20,
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Chest"
        component={ChestExercises}
        options={{
          headerStyle: {
            backgroundColor: "#191418",
          },
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 20,
            color: "white",
          },
          headerBackTitleStyle: {},
        }}
      />
      <Stack.Screen
        name="Biceps"
        component={BicepsExercises}
        options={{
          headerStyle: {
            backgroundColor: "#191418",
          },
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 20,
            color: "white",
          },
          headerBackTitleStyle: {},
        }}
      />
      <Stack.Screen
        name="ABS"
        component={AbsExercices}
        options={{
          headerStyle: {
            backgroundColor: "#191418",
          },
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 20,
            color: "white",
          },
          headerBackTitleStyle: {},
        }}
      />
    </Stack.Navigator>
  );
}
export default LibStack;
