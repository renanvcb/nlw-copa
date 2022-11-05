import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PlusCircle, SoccerBall } from 'phosphor-react-native'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'

import { NewPool } from '../screens/NewPool'
import { Pools } from '../screens/Pools'
import { FindPool } from '../screens/FindPool'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const { colors, sizes } = useTheme()

  const iconSize = 18

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: colors.yellow[500],
      tabBarInactiveTintColor: colors.gray[300],
      tabBarStyle: {
        position: 'absolute',
        height: sizes[22],
        borderTopWidth: 0,
        backgroundColor: colors.gray[800]
      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? -3 : 0
      }
    }}>
      <Screen
        name='new'
        component={NewPool}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={iconSize} />,
          tabBarLabel: 'Novo Bolão'
        }}
      />
      <Screen
        name='pools'
        component={Pools}
        options={{
          tabBarIcon: ({ color }) => <SoccerBall color={color} size={iconSize} />,
          tabBarLabel: 'Meus Bolões'
        }}
      />
      <Screen
        name='find'
        component={FindPool}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}