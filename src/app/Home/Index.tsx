import { Image, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ height: 34, width: 134 }}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
}
