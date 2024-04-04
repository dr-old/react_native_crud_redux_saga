import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {FormInput} from '../../../components/molecules';
import {ButtonGradient, Divider, OptionLabel} from '../../../components/atoms';
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
        <Text style={styles.p4(color.white5)}>
          Sign in to continue your journey
        </Text>
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
            color: color.white5,
            onClick: () => setToogle(!isToogle),
          }}
        />
        <Text
          onPress={() => console.log('ForgotPassword')}
          style={styles.h7(color.green4, 'right')}>
          Forgot Password ?
        </Text>
        <Divider height={20} />
        <ButtonGradient
          title="Sign In!"
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

const stylesCust = StyleSheet.create({
  groupInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  groupItem: {width: '47%'},
  contentBody: {marginHorizontal: 30},
  contentImage: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {flex: 1, marginHorizontal: 30, marginTop: 80},
  buttonGoogle: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    marginTop: 35,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});

export default Login;
