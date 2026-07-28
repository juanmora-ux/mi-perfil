import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return ( 
<View style={styles.screen}>

      <View style={styles.tarjeta}>
        
        <Image 
          style={styles.avatar} 
          source={require('./assets/juan-image.png')} 
        />
        <Text style={styles.nombre}>Juan Mora</Text>

        <Text style={styles.rol}>Estudiante de Ingenieria Informática</Text>

        <View style={styles.listaHabilidades}>

          <Text style={styles.habilidad}>React Native & Mobile</Text>
          
          <Text style={styles.habilidad}>JavaScript & Node.js</Text>

          <Text style={styles.habilidad}>Control de Versiones (Git)</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    width: '85%',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  rol: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 20,
  },
  listaHabilidades: {
    width: '100%',
    gap: 10,
  },
  habilidad: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    textAlign: 'center',
    color: '#334155',
    fontWeight: '500',
    fontSize: 14,
  },
});