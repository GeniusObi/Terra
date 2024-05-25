import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { signIn } from '../../lib/appwwrite';
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState();
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView style={tailwind`bg-[#161622] h-full`}>
      <ScrollView>
        <View
          style={tailwind`w-full flex justify-center items-center min-h-[84vh] my-6  px-2`}
        >
          <Image
            style={tailwind`w-[115px] h-[35px]`}
            source={images.logo}
            resizeMode="contain"
          />
          <Text
            style={tailwind`text-3xl text-white font-bold text-semibold text-center mt-4`}
          >
            Login to Terra
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handChangeText={(e) => setForm({ ...form, password: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.email}
            handChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title={'Sign In'}
            handlePress={submit}
            containerStyle={'mt-7'}
            isLoading={isSubmitting}
          />
          <View style={tailwind`justify-center pt-5 flex-row gap-2`}>
            <Text style={tailwind`text-lg text-gray-100 `}>
              Don't have an account?
            </Text>
            <Link
              href={'/sign-up'}
              style={tailwind`text-lg font-semibold text-[#FF9C01]`}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
