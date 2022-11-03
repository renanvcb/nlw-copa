import { Button as BtnNativeBase, IButtonProps, Text } from 'native-base'

interface ButtonProps extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY'
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <BtnNativeBase
      w='full'
      h={14}
      rounded='sm'
      fontSize='md'
      bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500' }
      _pressed={{ bg: type === 'SECONDARY' ? 'red.400' : 'yellow.600'}}
      _loading={{ _spinner: { color: 'black' } }}
      { ...rest }
    >
      <Text
        fontSize='sm'
        fontFamily='heading'
        color={type === 'SECONDARY' ? 'white' : 'black'}
        textTransform='uppercase'
      >
        {title}
      </Text>
    </BtnNativeBase>
  )
}