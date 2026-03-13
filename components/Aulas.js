import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Button} from 'react-native';
import rb from './rainbowStyles';
import {Capa} from './Capa';
import {PerfumeA} from './perfumeA';
import {PerfumeB} from './perfumeB';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop:20,
    justifyContent: 'center'
  },
    article: {
    flex: 1,
    backgroundColor: '#ffe4a9',
    marginTop:20
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
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    width: 400,
    height: 400,
    alignSelf: 'center'
  },
  rectAppImg: {
    marginTop: 10,
    marginBottom: 500,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#000',
    borderWidth: 2,
    width: 250,
    height: 400,
    alignSelf: 'center'
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    marginLeft: 15
  },
  greatArticleTitle:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 15,
    alignSelf: 'top',
    textAlign: 'center',
    backgroundColor: '#000',
    height: 80

  },
  greatCenterAppTitle:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 140,
    marginLeft: 15,
    alignSelf: 'center',
    textAlign: 'center'
  },
  subCenterAppTitle:{
    fontSize: 15,
    color: '#ac6100',
    marginBottom: 10,
    marginLeft: 15,
    alignSelf: 'center',
    textAlign: 'center',
    width: 700
  },
  paragraphy:{
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000',
    marginHorizontal: 22,
    marginBottom: 25,
    textAlign: 'justify',
    justifyContent: 'center',
    height: 200
  },
 doubleMargin: {
    marginTop: 40,
    marginBottom: 40
  }
});

export function Aula1() {
  return (
    <View style={styles.container}>
      {/* <Button>
      color:'ffff00'
      title:'VOLTAR'
      onPress: () => navigation.goBack()
      </Button> */}
      <Text style={styles.greatArticleTitle}>Aula 1 e 4!</Text>
      <Text style={[rb.red,styles.justified]}>Oi! Esse é o app para a glória de Deus!
      </Text>
      <Text style={[rb.orange,styles.justified]}>Lembre-se sempre: faça tudo para o louvor de Deus!
      </Text>
      <Text style={[rb.yellow,styles.justified]}>Deus é o nosso refúgio e força, um socorro sempre presente em tempo de tribulação.
      </Text>
      <Text style={[rb.green,styles.justified]}>Louvai ao Senhor, pois ele é bom; seu amor dura para sempre.
      </Text>
      <Text style={[rb.blue,styles.justified]}>O Senhor é meu pastor, nada me faltará.
      </Text>
      <Text style={[rb.indigo,styles.justified]}>Agradecei ao Senhor, pois ele é bom; seu amor dura para sempre.
      </Text>
      <Text style={[rb.violet, rb.left]}>Deus nos ama e nos abençoa.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}



export function Aula2(){
  return(
    <ScrollView style={styles.article}>
      <Text style={[styles.greatTitle,styles.doubleMargin]}>As peças do Xadrez</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/R.dc98d71e9b1f487ceeb0065c911a1074?rik=BxG1SOyIZNJNDw&pid=ImgRaw&r=0"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>Peão</Text>
      <Text style={styles.paragraphy}>    O peão é a peça mais numerosa do jogo, com oito unidades para cada jogador. Ele se move para frente, mas captura na diagonal. Na sua primeira jogada, o peão pode avançar duas casas, mas depois disso, só pode avançar uma casa por vez. O peão é considerado uma peça de valor baixo, mas pode ser promovido a qualquer outra peça (exceto o rei) quando alcança a última fileira do tabuleiro.</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.0302MQe5NPK-SSPTPiu64QHaFL?w=254&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>Torre</Text>
      <Text style={styles.paragraphy}>    A torre é uma peça poderosa que se move em linha reta, tanto horizontalmente quanto verticalmente. Cada jogador começa com duas torres, localizadas nos cantos do tabuleiro. A torre é especialmente eficaz para controlar colunas e fileiras, e é frequentemente usada para proteger o rei ou atacar peças adversárias.         </Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.aEtYfxQlAKsnIyyC-_XX-QHaE8?w=283&h=189&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>Cavalo</Text>
      <Text style={styles.paragraphy}>    O cavalo é uma peça única que se move em um padrão de "L". Ele pode saltar sobre outras peças, o que o torna uma peça versátil e imprevisível. Cada jogador começa com dois cavalos, localizados ao lado das torres. O cavalo é especialmente útil para atacar peças adversárias e criar ameaças táticas.</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.YdwCXZdJnDjsTmmkWkEomQHaFj?w=255&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>Bispo</Text>
      <Text style={styles.paragraphy}>    O bispo é uma peça que se move diagonalmente em qualquer direção. Cada jogador começa com dois bispos, localizados ao lado dos cavalos. O bispo é eficaz para controlar as diagonais do tabuleiro e pode ser uma peça valiosa para ataques a longo alcance.</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.eTgSzhzq_SGwvQ0GCXeMygHaM8?w=184&h=321&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>Rainha</Text>
      <Text style={styles.paragraphy}>    A rainha é a peça mais poderosa do jogo, capaz de se mover em qualquer direção (horizontal, vertical e diagonal) por qualquer número de casas. Cada jogador começa com uma rainha, localizada ao lado do rei. A rainha é frequentemente usada para ataques agressivos e para controlar o centro do tabuleiro.</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.ce7BOJ1jHxvjLdEIeyoTVwHaF-?w=242&h=195&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>Rei</Text>
      <Text style={styles.paragraphy}>    O rei é a peça mais importante do jogo, e o objetivo principal é proteger o próprio rei enquanto tenta capturar o rei adversário. O rei se move uma casa em qualquer direção (horizontal, vertical ou diagonal). O jogo termina quando um rei é colocado em xeque-mate, ou seja, quando está sob ataque e não tem nenhuma jogada legal para escapar.</Text>
      <Image
        source={ {uri:"https://th.bing.com/th/id/OIP.PPFA4L_NfCbEvNfslnKLxwHaEJ?w=309&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
    </ScrollView>
  );
}

export function Aula3(){return(
  <ScrollView style={styles.article}>

      <Text style={styles.greatCenterAppTitle}>As peças do Xadrez</Text>
      <Text style={styles.subCenterAppTitle}>Conheça as peças e seus movimentos</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/R.dc98d71e9b1f487ceeb0065c911a1074?rik=BxG1SOyIZNJNDw&pid=ImgRaw&r=0"}}
        style= {[styles.rectAppImg]}
      />

      <Text style={styles.sectionTitle}>Peão</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.0302MQe5NPK-SSPTPiu64QHaFL?w=254&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />      
      <Text style={styles.paragraphy}>O peão é a peça mais numerosa do jogo, com oito unidades para cada jogador. Ele se move para frente, mas captura na diagonal. Na sua primeira jogada, o peão pode avançar duas casas, mas depois disso, só pode avançar uma casa por vez. O peão é considerado uma peça de valor baixo, mas pode ser promovido a qualquer outra peça (exceto o rei) quando alcança a última fileira do tabuleiro.</Text>

      <Text style={styles.sectionTitle}>Torre</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.aEtYfxQlAKsnIyyC-_XX-QHaE8?w=283&h=189&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>A torre é uma peça poderosa que se move em linha reta, tanto horizontalmente quanto verticalmente. Cada jogador começa com duas torres, localizadas nos cantos do tabuleiro. A torre é especialmente eficaz para controlar colunas e fileiras, e é frequentemente usada para proteger o rei ou atacar peças adversárias.         </Text>

      <Text style={styles.sectionTitle}>Cavalo</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.YdwCXZdJnDjsTmmkWkEomQHaFj?w=255&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>O cavalo é uma peça única que se move em um padrão de "L". Ele pode saltar sobre outras peças, o que o torna uma peça versátil e imprevisível. Cada jogador começa com dois cavalos, localizados ao lado das torres. O cavalo é especialmente útil para atacar peças adversárias e criar ameaças táticas.</Text>

      <Text style={styles.sectionTitle}>Bispo</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.eTgSzhzq_SGwvQ0GCXeMygHaM8?w=184&h=321&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>O bispo é uma peça que se move diagonalmente em qualquer direção. Cada jogador começa com dois bispos, localizados ao lado dos cavalos. O bispo é eficaz para controlar as diagonais do tabuleiro e pode ser uma peça valiosa para ataques a longo alcance.</Text>

      <Text style={styles.sectionTitle}>Rainha</Text>
      <Image source={ {uri:"https://th.bing.com/th/id/OIP.ce7BOJ1jHxvjLdEIeyoTVwHaF-?w=242&h=195&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>A rainha é a peça mais poderosa do jogo, capaz de se mover em qualquer direção (horizontal, vertical e diagonal) por qualquer número de casas. Cada jogador começa com uma rainha, localizada ao lado do rei. A rainha é frequentemente usada para ataques agressivos e para controlar o centro do tabuleiro.</Text>

      <Text style={styles.sectionTitle}>Rei</Text>
     <Image
        source={ {uri:"https://th.bing.com/th/id/OIP.PPFA4L_NfCbEvNfslnKLxwHaEJ?w=309&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}}
        style= {styles.img}
      />
      <Text style={styles.paragraphy}>O rei é a peça mais importante do jogo, e o objetivo principal é proteger o próprio rei enquanto tenta capturar o rei adversário. O rei se move uma casa em qualquer direção (horizontal, vertical ou diagonal). O jogo termina quando um rei é colocado em xeque-mate, ou seja, quando está sob ataque e não tem nenhuma jogada legal para escapar.</Text>
    </ScrollView>
  );}

export function Aula4(){
  return(
    <View style={styles.container}>
      <Capa />
      <PerfumeA />
      <PerfumeB />
    </View>
  );
}

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