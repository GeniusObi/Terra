import { View, Text, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import tailwind from 'twrnc';
import { icons } from '../constants';

const FormField = ({
  title,
  value,
  handChangeText,
  otherStyles,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={tailwind`space-y-2 ${otherStyles}`}>
      <Text style={tailwind`text-base text-gray-100`}>{title}</Text>
      <View
        style={tailwind`border-2  border-black-200 w-full   items-centerr h-16 px-4 bg-black-100  rounded-lg flex-row`}
      >
        <TextInput
          style={tailwind`flex-1 text-white text-base`}
          value={value}
          placeholder={placeholder}
          onChangeText={handChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          placeholderTextColor="#7B7B8B"
          {...props}
        />
        {title === 'Password' && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              style={tailwind`w-6 h-6 se`}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;
