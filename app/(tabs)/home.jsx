import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';

const Home = () => {
  return (
    <SafeAreaView style={tailwind`bg-[]`}>
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <View>{item.id}</View>}
        ListHeaderComponent={() => (
          <View style={tailwind`my-6 px-4 space-y-4`}>
            <Text style={tailwind`text-3xl text-white font-bold text-center`}>
              Welcome back
              <Text style={tailwind`text-secondary-200`}>Terra</Text>
            </Text>

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
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Terra
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
