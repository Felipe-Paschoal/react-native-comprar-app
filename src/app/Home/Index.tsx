import { Button } from '@/components/Button';
import { Filter } from '@/components/Filter';
import { Input } from '@/components/Input';
import { Item } from '@/components/Item';
import { FilterStatus } from '@/types/FilterStatus';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export default function Home() {
  const [items, setItems] = useState<any>([]);
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState('');

  function handleAdd() {
    if (!description.trim()) {
      return Alert.alert('Adicionar', 'Informe a descrição para adicionar.');
    }

    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    setItems((prevState) => [...prevState, newItem]);
  }

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
        <Input
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
        />
        <Button title="Adicionar" onPress={handleAdd} />
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
            <Filter
              key={status}
              status={status}
              isActive={filter === status}
              onPress={() => setFilter(status)}
            />
          ))}
          <TouchableOpacity style={{ marginLeft: 'auto' }}>
            <Text style={{ fontSize: 12, color: '#828282', fontWeight: 600 }}>
              Limpar
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log('mudar o status')}
              onRemove={() => console.log('remover')}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#EEF0F5',
                marginVertical: 16,
              }}
            />
          )}
          contentContainerStyle={{ paddingTop: 24, paddingBottom: 62 }}
          ListEmptyComponent={() => (
            <Text
              style={{ fontSize: 14, color: '#808080', textAlign: 'center' }}
            >
              Nenhum item aqui.
            </Text>
          )}
        />
      </View>
    </View>
  );
}
