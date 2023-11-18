import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { data } from './listItemMock';
import BarberListItem from './BarberListItem';


const BarberAllList = () => {
    
    return (
      <View style={styles.listBarberContainer}>
        <View style={styles.headerList}>
          <Text style={styles.titleList}>Mais populares</Text>
          <Text style={styles.seeAll}>Ver todos</Text>
        </View>
        <FlatList
          style={{width: '100%', padding: 0}}
          data={data}
          keyExtractor={item => item.key} // Chave única para cada item
          renderItem={({ item }) => <BarberListItem item={item}/>}
        />
      </View>
    );
  };
  
  export const styles = StyleSheet.create({
    listBarberContainer:{
      marginTop: 20
    },
    titleList:{
      color: '#fff',
      fontSize: 20
    },
    headerList:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15
    },
    seeAll: {
      color: '#fff',
      fontSize: 16,
      opacity: 0.7
    }
  })
  export default BarberAllList;
  
  
  
  
  