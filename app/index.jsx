import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import tailwind from 'twrnc';
export default function App() {
  return (
    <SafeAreaView style={tailwind` h-full bg-[#161622]`}>
      {/* <Loader isLoading={loading} /> */}

      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View
          style={tailwind`w-full flex justify-center items-center min-h-[84vh]  px-4`}
          // className=""
        >
          <Image
            source={images.logo}
            style={tailwind`w-[184px] h-[84px]`}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={{ maxWidth: 380, height: 280, width: '100%' }}
            resizeMode="contain"
          />

          <View style={tailwind`relative mt-5`}>
            <Text style={tailwind`text-3xl text-white font-bold text-center`}>
              Discover Endless{'\n'}
              Possibilities with{' '}
              <Text style={tailwind`text-secondary-200`}>Terra</Text>
            </Text>

            <Image
              source={images.path}
              style={tailwind`w-[136px] h-[15px] absolute -bottom-2 -right-8`}
              resizeMode="contain"
            />
          </View>

          <Text style={tailwind`text-sm  text-gray-100 mt-7 text-center`}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Terra
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'chocolate',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

//find oout meaning of expor status bar latter
