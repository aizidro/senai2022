import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import  CursoTecnico from '../mock/tecnico'

export default function fic({ navigation}) {
    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={CursoTecnico}
                style={styles.tecnico}
                renderItem={({ item }) => <TouchableOpacity style={styles.item}onPress={()=>{abrirDetalhes(item)}}>
                    <Text style={styles.titulo}>{item.curso}</Text>
                    <Text tyle={styles.area}>{item.area}</Text>
                </TouchableOpacity>}
            />
        </View>);

}

const styles = StyleSheet.create({
    container: {

    },
    fic: {

    },
    item: {

    }
})