import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function CountryInfo({name, flag, population, capital, region}) {
    return (
        <View style={styels.button}>
            <Button
            title={name}
            color='#9561c2'
            onPress={ ()=> alert(`Capital: ${capital}\nPopulation: ${population}\n Region: ${region}`)}
        />
        </View>
    )
}
const styels = StyleSheet.create({
    button:{
        marginTop:10,
    }
})
