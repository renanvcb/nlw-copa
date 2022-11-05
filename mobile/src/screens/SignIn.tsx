import { Center, Text, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons'
import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button';

import LogoImg from '../assets/logo.svg';

export function SignIn() {
  const { signIn, isUserLoading } = useAuth()

  return (
    <Center flex={1} bgColor='gray.950' p={7}>
      <LogoImg width={212} height={40} />
      <Button
        title='entrar com google'
        type='SECONDARY'
        leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
        mt={12}
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{
          _spinner: { color: 'white'}
        }}
      />
      <Text
        color='gray.200'
        textAlign='center'
        mt={4}
      >
        Não utilizamos nenhuma informação além {'\n'}do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}