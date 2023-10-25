import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';



const data = [
    { id: '1', title: 'Item 1' , image: logo, stars: 5},
    { id: '2', title: 'Item 2' , image: logo, stars: 4},
    { id: '3', title: 'Item 3' , image: logo, stars: 3},
    // Adicione mais itens conforme necessário
  ];

const BarberAllList = () => {
    
    return (
      <View>
        <Text style={styles.titleList}>Barbearias Disponiveis</Text>
        <FlatList
          style={{width: '100%', padding: 0}}
          data={data}
          keyExtractor={item => item.id} // Chave única para cada item
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View style={styles.headerItem}>
                <Image source={item.image} style={styles.image}/>
              </View>
              <View style={styles.contentItem}>
                <View>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textDescription}>Disponivel</Text>
                </View>
                <View style={styles.stars}>
                  <Icon name="star" size={20} color="#F5B400"/>
                  <Icon name="star" size={20} color="#F5B400"/>
                  <Icon name="star" size={20} color="#F5B400"/>
                  <Icon name="star" size={20} color="#F5B400"/>
                  <Icon name="star" size={20} color="#F5B400"/>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  };
  
  export const styles = StyleSheet.create({
    titleList:{
      color: '#fff',
      fontSize: 24
    },
    textTitle: {
      color: '#fff',
      fontSize: 24
    },
    textDescription: {
      color: '#fff'
    },
    image:{
      height: 60,
      width: 60,
      borderRadius: 30,
    },
    listItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 15,
      backgroundColor: 'rgba(0, 0, 0, 0.50)'
    },
    headerItem: {
      overflow: 'hidden',
      width: '20%'
    },
    contentItem:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      width: '80%'
    },
    stars:{
      display: 'flex',
      flexDirection: 'row',
      gap: 8
    }
  })
  export default BarberAllList;
  
  
  
  
  