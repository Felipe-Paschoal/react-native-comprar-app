import { Button } from '@/components/Button';
import { Filter } from '@/components/Filter';
import { Input } from '@/components/Input';
import { FilterStatus } from '@/types/FilterStatus';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d0d2d8',
        paddingTop: 62,
      }}
    >
      <Image
        style={{ height: 34, width: 134 }}
        source={require('@/assets/logo.png')}
      />
      <View
        style={{ width: '100%', paddingHorizontal: 16, gap: 7, marginTop: 42 }}
      >
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: 24,
          marginTop: 24,
          paddingTop: 32,
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            gap: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#E4E6EC',
            paddingBottom: 12,
          }}
        >
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}
          <TouchableOpacity style={{ marginLeft: 'auto' }}>
            <Text style={{ fontSize: 12, color: '#828282', fontWeight: 600 }}>
              Limpar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
