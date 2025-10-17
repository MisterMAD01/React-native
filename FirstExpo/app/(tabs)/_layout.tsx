import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { LinearGradient } from "expo-linear-gradient";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Pressable, Text, StyleSheet } from "react-native";
import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

// กำหนด Type ของ Props สำหรับ Icon component
type TabBarIconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  size: number;
  style?: any;
};

const ICON_SIZE = 28;

// Custom Tab Bar Component พร้อม Gradient Background (โทนส้ม)
function CustomTabBar(props: BottomTabBarProps) {
  const activeColor = "#FFFFFF";
  const inactiveColor = "rgba(255, 255, 255, 0.7)";

  return (
    <LinearGradient
      colors={["#FF8800", "#EE4D2D"]} // Gradient ส้มสดไปส้มเข้ม Shopee
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={tabBarStyles.gradientBackground}
    >
      <View style={tabBarStyles.container}>
        {props.state.routes.map((route, index) => {
          const isFocused = props.state.index === index;
          const { options } = props.descriptors[route.key];

          // แก้ไข: Type Assertion เพื่อความสมบูรณ์ของ TypeScript
          const IconComponent = options.tabBarIcon
            ? (options.tabBarIcon({
                color: activeColor,
                focused: isFocused,
                size: ICON_SIZE,
              }) as React.ReactElement<TabBarIconProps>)
            : null;

          const iconProps = IconComponent ? IconComponent.props : null;

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

// TabLayout ใช้ CustomTabBar
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
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products/index"
        options={{
          title: "Shop",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "basket" : "basket-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cart" : "cart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "call" : "call-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="admin"
        options={{
          title: "Admin",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

// Stylesheet สำหรับ Custom Tab Bar
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
