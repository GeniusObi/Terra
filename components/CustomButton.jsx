import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <Pressable
      onPress={handlePress}
      activeOpacity={0.7}
      style={tailwind`bg-[#FF9C01] mt-4 rounded-xl w-full flex  min-h-[62px] justify-center ${containerStyle} ${
        isLoading ? 'opacity-50' : null
      }`}
      disabled={isLoading}
    >
      <Text
        style={tailwind`text-[#fff] text-center text-[p] text-lg ${textStyles}`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
