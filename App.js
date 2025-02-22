import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { Suspense } from 'react'
import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei/native'
import { WomanAvatar } from './components/WomanAvatar';
import useControls from "r3f-native-orbitcontrols";
export default function App() {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      
      <Canvas >
        <OrbitControls enablePan={true}></OrbitControls>
      <ambientLight />
        <Suspense fallback={null}>
          <WomanAvatar/>
        </Suspense>
      </Canvas>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
