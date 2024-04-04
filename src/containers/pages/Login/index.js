import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {FormInput} from '../../../components/molecules';
import {ButtonLabel, Divider, OptionLabel} from '../../../components/atoms';
import stylesCust from './stylesCust';
import useAction from './useAction';
import {Container} from '../../organism';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const {
    navigation,
    isToogle,
    form,
    user,
    setToogle,
    onChangeText,
    signIn,
    signInValidate,
    handleGoogleSignIn,
  } = useAction();

  return (
    <Container loading={user.loading} bgColor={color.white9}>
      <View style={stylesCust.header}>
        <Text style={styles.h2()}>Sign In</Text>
        <Divider height={5} />
        <Text style={styles.p4()}>Sign in to continue your journey</Text>
      </View>
      <Divider height={50} />
      <View style={stylesCust.contentBody}>
        <FormInput
          label="Email"
          placeholder="Your email"
          type="solid"
          solid={color.white}
          value={form.email}
          onChangeText={value => onChangeText('email', value)}
        />
        <FormInput
          label={'Password'}
          placeholder="Your password"
          type="solid"
          solid={color.white}
          secureTextEntry={isToogle}
          value={form.password}
          onChangeText={value => onChangeText('password', value)}
          icon={{
            name: !isToogle ? 'eye' : 'eye-off',
            color: color.grey2,
            onClick: () => setToogle(!isToogle),
          }}
        />
        <Text
          onPress={() => console.log('ForgotPassword')}
          style={styles.h7(color.green4, 'right')}>
          Forgot Password ?
        </Text>
        <Divider height={20} />
        <ButtonLabel
          type="success"
          solid={true}
          label="Sign In!"
          size="large"
          disabled={!signInValidate()}
          onClick={() => signIn()}
        />
        <OptionLabel
          title="Dont have account ? "
          subtitle="Sign Up"
          // onClick={() => navigation.push('Register')}
        />
        <Divider height={20} />
        <TouchableOpacity
          style={stylesCust.buttonGoogle}
          onPress={handleGoogleSignIn}>
          <FontAwesome
            name="google"
            size={16}
            color={color.white}
            style={{width: 16, height: 16, marginRight: 8}}
          />
          <Text style={styles.h5(color.white)}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;
