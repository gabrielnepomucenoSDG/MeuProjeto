import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Button} from 'react-native';

export function Aula1() {
  return (
    <View style={styles.container}>
      {/* <Button>
      color:'ffff00'
      title:'VOLTAR'
      onPress: () => navigation.goBack()
      </Button> */}

      <Text style={[styles.red,styles.justified]}>Oi! Esse é o app para a glória de Deus!
      </Text>
      <Text style={[styles.orange,styles.justified]}>Lembre-se sempre: faça tudo para o louvor de Deus!
      </Text>
      <Text style={[styles.yellow,styles.justified]}>Deus é o nosso refúgio e força, um socorro sempre presente em tempo de tribulação.
      </Text>
      <Text style={[styles.green,styles.justified]}>Louvai ao Senhor, pois ele é bom; seu amor dura para sempre.
      </Text>
      <Text style={[styles.blue,styles.justified]}>O Senhor é meu pastor, nada me faltará.
      </Text>
      <Text style={[styles.indigo,styles.justified]}>Agradecei ao Senhor, pois ele é bom; seu amor dura para sempre.
      </Text>
      <Text style={[styles.violet, styles.left]}>Deus nos ama e nos abençoa.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop:20,
    justifyContent: 'center'
  },
  red: { 
    color: '#ff0000',
    marginLeft:15,
    fontSize: 19,
    fontWeight: 'bold'
  },
  orange: { 
    color: '#ff7f00',
    marginTop:20,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: 'bold'
  },
  yellow: { 
    color: '#ffff00',
    marginTop:20,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: 'bold'
  },
  green: { 
    color: '#00ff00',
    marginTop:20,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: 'bold'
  },
  blue: { 
    color: '#00ddff',
    marginTop:20,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: 'bold'
  },
  indigo: { 
    color: '#0000ff',
    marginTop:20,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: 'bold'
  },
  violet: { 
    color: '#8f00ff',
    marginTop:20,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: 'bold'
  },
  justified: {
    textAlign: 'justify'
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 400,
    height: 400
  }
});


export function Aula2(){
  return(
    <View>
      <Image
        source={ {uri:"https://media.licdn.com/dms/image/v2/C4E03AQGLqOY1ehIX7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1561406152889?e=1775088000&v=beta&t=rNy1RH_uvpLOAAauFEIJLHPKutOH1zmMhj9hiDajyxU"}}
        style= {styles.img}
      />
    </View>
  );
}

export function Aula3(){return(null)}

export function Aula4(){return(null)}

export function Aula5(){return(null)}

export function Aula6(){return(null)}

export function Aula7(){return(null)}

export function Aula8(){return(null)}

export function Aula9(){return(null)}

export function Aula10(){return(null)}

export function Aula11(){return(null)}

export function Aula12(){return(null)}

export function Aula13(){return(null)}

export function Aula14(){return(null)}

export function Aula15(){return(null)}

export function Aula16(){return(null)}