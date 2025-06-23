import { FilterStatus } from '@/types/FilterStatus';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusIcon } from '../StatusIcon';
import { Trash2 } from 'lucide-react-native';

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onRemove: () => void;
  onStatus: () => void;
};

export function Item({ data, onStatus, onRemove }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={{ flex: 1, fontSize: 14, fontWeight: 600 }}>
        {data.description}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
