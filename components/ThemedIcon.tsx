import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet } from 'react-native';

export type ThemedIconProps = {
  lightColor?: string;
  darkColor?: string;
  size?: number;
  name: keyof typeof Ionicons.glyphMap;
  style?: any;
};

export function ThemedIcon({
  lightColor,
  darkColor,
  size = 32,
  name,
  style,
}: ThemedIconProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return (
    <Ionicons
      name={name}
      size={size}
      color={color}
      style={[styles.icon, style]}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    // You can define any default styles for the icon here
  },
});
