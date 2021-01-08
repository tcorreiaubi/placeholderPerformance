import React from 'react';
import {ScrollView, Text} from 'react-native';

import {Placeholder} from './Placeholder';

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView contentContainerStyle={{backgroundColor: 'lightblue'}}>
        <Text>Placeholder test</Text>
        <Placeholder />
        <Text>Placeholder test</Text>
        <Placeholder />
      </ScrollView>
    </>
  );
};

export default App;
