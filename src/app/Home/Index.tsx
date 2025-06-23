import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Image, View } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d0d2d8',
        paddingTop: 62,
        padding: 24,
        gap: 24,
      }}
    >
      <Image
        style={{ height: 34, width: 134 }}
        source={require('@/assets/logo.png')}
      />
      <Input placeholder="O que você precisa comprar?" />
      <Button title="Entrar" />
    </View>
  );
}
