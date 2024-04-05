import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/router';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {env} from './src/utils';
import CodePush from 'react-native-code-push';
import {ModalNewUpdate} from './src/components/molecules';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

// Initialize Google Sign-In
GoogleSignin.configure({
  webClientId: env.GOOGLE.CLIENTID,
});

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

function App() {
  const [progress, setProgress] = React.useState(false);

  React.useEffect(() => {
    CodePush.sync(
      {
        deploymentKey: 'Ut8NseUli8qQmHz3TnoB19iwXzLcN2DuIMSdx',
        updateDialog: true,
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      codePushStatusDidChange,
      codePushDownloadDidProgress,
    );
  }, []);

  function codePushStatusDidChange(syncStatus) {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for update.');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Download packaging....');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('Awaiting user action....');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update');
        setProgress(false);
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        console.log('codepush status up to date');
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        console.log('update cancel by user');
        setProgress(false);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed and will be applied on restart.');
        setProgress(false);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        console.log('An unknown error occurred');
        setProgress(false);
        break;
    }
  }

  function codePushDownloadDidProgress(progress) {
    setProgress(progress);
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
          {!!progress ? <ModalNewUpdate progress={progress} /> : null}
        </PersistGate>
      </Provider>
      <FlashMessage
        position="top"
        duration={3000}
        floating={true}
        hideOnPress={true}
      />
    </>
  );
}

export default CodePush(codePushOptions)(App);
