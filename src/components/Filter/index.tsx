import { FilterStatus } from '@/types/FilterStatus';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StatusIcon } from '../StatusIcon';
type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        {
          opacity: isActive ? 1 : 0.5,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        },
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      <StatusIcon status={status} />

      <Text style={{ fontSize: 12, fontWeight: 600 }}>
        {status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}
      </Text>
    </TouchableOpacity>
  );
}
