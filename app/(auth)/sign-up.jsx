import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwwrite';
const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState();
  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.username, form.email, form.password);
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
            Sign Up For Terra
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handChangeText={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            otherStyles="mt-10"
            placeholder={'Username'}
          />
          <FormField
            title="Email"
            value={form.email}
            handChangeText={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            keyboardType="email-address"
            placeholder={'Email'}
          />
          <FormField
            title="Password"
            value={form.email}
            handChangeText={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            otherStyles="mt-7"
            placeholder={'Password'}
          />
          <CustomButton
            title={'Sign Up'}
            handlePress={submit}
            containerStyle={`mt-7`}
            isLoading={isSubmitting}
          />
          <View style={tailwind`flex justify-center pt-5 flex-row gap-2`}>
            <Text style={tailwind`text-lg text-gray-100 `}>
              Have an account already?
            </Text>
            <Link href="/sign-in" style={tailwind` text-lg text-[#FF9C01]`}>
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
