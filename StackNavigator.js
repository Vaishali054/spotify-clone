import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab= createBottomTabNavigator()


export default function BottomTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen/>
        </Tab.Navigator>
    )
}