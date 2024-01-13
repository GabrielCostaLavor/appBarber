import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['Br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abril.', 'Maio.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: "Aujourd'hui"
  };

  LocaleConfig.defaultLocale = 'Br';


const Scheduling: React.FC = () => {
    const [selected, setSelected] = useState('');

    useEffect(() => {
        console.log(selected);
        
    },[selected])

    return(
        <View style={styles.schedulingContainer}>
            <Text style={styles.title}>Agende seu corte</Text>
            <View style={styles.informationColors}>
                <View style={styles.colorsItem}>
                    <View style={{...styles.color, backgroundColor: 'red'}}></View>
                    <Text style={styles.textColor}>Lotado/Fechado</Text>
                </View>
                <View style={styles.colorsItem}>
                    <View style={{...styles.color, backgroundColor: '#F5B400'}}></View>
                    <Text style={styles.textColor}>Cheio</Text>
                </View>
            </View>
            <View style={styles.calendar}>
            <Calendar
                onDayPress={day => {
                    console.log(day);
                    
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true},
                    '2023-11-20': {inactive: true, disabled: true, color: "red", selectedColor: 'red', selected: true,},
                    '2023-11-21': {inactive: true, disabled: true, color: "red", selectedColor: '#F5B400', selected: true,},
                }}
                theme={{
                    backgroundColor: '#000',
                    calendarBackground: '#000',
                    textSectionTitleColor: '#fff',
                    selectedDayBackgroundColor: '#8429D8',
                    selectedDayTextColor: '#fff',
                    textDayFontWeight: 'bold',
                    textDayFontSize: 16,
                    todayTextColor: '#F5B400',
                    dayTextColor: '#fff',
                    textDisabledColor: '#fff',
                    textDayHeaderFontWeight: 'bold',
                    monthTextColor: '#F5B400',
                    textMonthFontWeight: 'bold',
                    textMonthFontSize: 20,
                }}  
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    schedulingContainer: {
        marginTop: 10
    },
    calendar: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 20
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5
    },
    informationColors:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 10,
        marginTop: 5
    },
    colorsItem:{
       display: 'flex',
       flexDirection: 'row',
       gap: 10,
       alignItems: 'center',
    },
    textColor:{
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    color:{
        height: 16,
        width: 16,
    }
})
export default Scheduling