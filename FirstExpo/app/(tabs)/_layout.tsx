import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { LinearGradient } from "expo-linear-gradient";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Pressable, Text, StyleSheet } from "react-native";
import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

// ใช้ type utility เพื่อดึงชื่อไอคอนทั้งหมด
type TabBarIconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  size: number;
  style?: any;
};

const ICON_SIZE = 28;

function CustomTabBar(props: BottomTabBarProps) {
  // Active Tab: ทึบแสง 100% (Alpha 1.0)
  const activeColor = "#FFFFFF";
  // Inactive Tab: ทึบแสง 50% (Alpha 0.5) เพื่อให้ดูจางลง
  const inactiveColor = "rgba(255, 255, 255, 0.5)";

  return (
    <LinearGradient
      colors={["#1c9273", "#004d40"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={tabBarStyles.gradientBackground}
    >
      <View style={tabBarStyles.container}>
        {props.state.routes.map((route, index) => {
          const isFocused = props.state.index === index;
          const { options } = props.descriptors[route.key];

          const IconComponent = options.tabBarIcon
            ? options.tabBarIcon({
                color: activeColor,
                focused: isFocused,
                size: ICON_SIZE,
              })
            : null;

          const iconProps = IconComponent
            ? (IconComponent as React.ReactElement<TabBarIconProps>).props
            : null;

          const label =
            typeof options.title === "string" ? options.title : route.name;

          const onPress = () => {
            const event = props.navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate(route.name as never);
            }
          };

          const color = isFocused ? activeColor : inactiveColor;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={tabBarStyles.tabButton}
            >
              {iconProps && iconProps.name && (
                <TabBarIcon name={iconProps.name} color={color} />
              )}
              <Text style={{ color: color, fontSize: 10, marginTop: 2 }}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </LinearGradient>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="call" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="admin"
        options={{
          title: "Admin",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const tabBarStyles = StyleSheet.create({
  gradientBackground: {
    height: 60,
    width: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
});
