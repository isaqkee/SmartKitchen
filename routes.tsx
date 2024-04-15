import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/receita'
import { treinoAcademia } from './pages/treino'
import { Ionicons } from '@expo/vector-icons/'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="treino"
                component={treinoAcademia}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="barbell-outline" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="barbell-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}