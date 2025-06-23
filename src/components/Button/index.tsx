import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';

type Props = PressableProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          {
            opacity: pressed ? 0.8 : 1,
            backgroundColor: '#2C46B1',
            height: 48,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          },
        ];
      }}
      {...rest}
    >
      <Text style={{ color: '#FFF', fontSize: 14, fontWeight: 600 }}>
        {title}
      </Text>
    </Pressable>
  );
}
