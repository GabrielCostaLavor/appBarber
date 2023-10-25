import { Dimensions, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import background from '../../assets/back.png';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type LayoutProps = "login"|"register";

interface DataForm {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().min(1, "Email é obrigatorio").email("Email invalido").required(),
    password: yup.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
    ).required('A senha é obrigatória'),
  }).required();

  export default function Login() {
    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
      });
    const [layout, useLayout] = useState<LayoutProps>('login')
    const onSubmit = (data: DataForm) => console.log(data);
    return (
        <SafeAreaView style={styles.wrapper}>
        <ImageBackground source={background} resizeMode="cover" style={{ ...styles.backgroundImage, width: windowWidth, height: windowHeight }}>
            <View style={styles.overlay} />
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}/>
                {/* <Text style={styles.textHeader}>Faça login para continuar.</Text> */}
            </View>
            <View style={{...styles.form, width: windowWidth - 60, height: windowHeight * 0.75}}>
                <View style={styles.headForm}>
                    <Icon name="user-alt" size={70} color="#fff" style={{textAlign: 'center'}}/>
                    <Text style={styles.textHeader}>Faça login para continuar.</Text>
                    {/* <View style={styles.verticalRow}></View>
                    <Pressable style={styles.headButtom}>
                        <Text style={styles.textButton}>Registrar</Text>
                    </Pressable> */}
                </View>
                <View style={styles.bodyForm}>
                    <View style={styles.fieldControlGroup}>
                        <View style={styles.fieldControl}>
                            <IconZocial name="email" size={30} color="#8429D8" style={{textAlign: 'center', marginBottom: -10}}/>
                            <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.fieldStyle}
                                    placeholder="Digite seu Email"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholderTextColor={'#fff'}
                                />
                            )}
                            />
                        </View>
                        {errors?.email && 
                            <Text style={styles.fieldError}><Text style={{color: '#fff', marginRight: 10}}>*   </Text>{errors?.email?.message}</Text>
                        }
                    </View>
                    <View style={{...styles.fieldControlGroup, marginBottom: 0}}>
                        <View style={styles.fieldControl}>
                            <IconMaterial name="security" size={30} color="#8429D8" style={{textAlign: 'center', marginBottom: -10}}/>
                            <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.fieldStyle}
                                    placeholder="Digite sua senha"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholderTextColor={'#fff'}
                                    secureTextEntry={true}
                                />
                            )}
                            />
                        </View>
                        {errors?.password && 
                            <Text style={styles.fieldError}><Text style={{color: '#fff', marginRight: 10}}>*   </Text>{errors?.password?.message}</Text>
                        }
                    </View>
                </View>
                <Pressable style={styles.buttons} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.textButton}>Entrar</Text>
                </Pressable>
            </View>
            </ImageBackground>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    wrapper: {
        flex: 1,
    },
    background: {
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center'
        // width: undefined,
        // height: undefined,
        // flexDirection: 'column',
        // backgroundColor:'transparent',
        // justifyContent: 'flex-start',
    },
    text: {
        color: "#FFF"
    },
    textHeader: {
        color: "#fff",
        fontSize: 20,
        marginTop: 15
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Preenche todo o espaço do pai
        backgroundColor: 'rgba(0, 0, 0, 0.65)', // Cor da sobreposição (pode ser ajustada para a sua preferência)
    },
    header: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: windowHeight * 0.1,
        width: windowHeight * 0.1,
    },
    form: {
        marginTop: 20,
        backgroundColor: '#1A1E26',
        borderRadius: 25,
        paddingHorizontal: 50,
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    headForm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    buttons: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center'
    },
    headButtom:{
    },
    textButton: {
        color: "#fff",
        backgroundColor: "#8429D8",
        fontSize: 24,
        paddingHorizontal: 30,
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        textAlign: 'center',
    },
    backgroundImage: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20
    },
    bodyForm: {
        marginTop: 40
    },
    fieldStyle:{
        borderColor: '#8429D8',
        borderBottomWidth: 2,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        fontSize: 18,
        lineHeight: 18,
        margin: 0,
        paddingBottom: 5,
        width: '100%'
    },
    fieldControl: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
    },
    fieldControlGroup: {
        display: 'flex',
        marginBottom: 20
    },
    fieldError:{
        color: '#FF0000',
        marginTop: 8
    }
})