import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const contarMais = () => {
    setCount(count + 1);
  };

  const contarMenos = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={{ margin: 20}}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 20 }}>Contador de Pessoas</Text>
        <View style={{ borderWidth: 2, borderColor: 'black', padding: 40, margin: 60}}>
          <Text style={{ fontSize: 100, fontWeight: 'bold'}}>{count}</Text>
        </View>
      </View>
      
      <View style={{margin: 20}}>
      <Button color='green' title="+" onPress={contarMais} />
      </View>
      <View style={{margin: 20}}>
      <Button color='red' title="-" onPress={contarMenos} />
      </View>
       
    </View>
  );
};

export default App;
