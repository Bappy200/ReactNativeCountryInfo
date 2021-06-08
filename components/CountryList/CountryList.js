import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import CountryInfo from '../CountryInfo/CountryInfo';

export default function CountryList() {
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
 
    return (
        <View>
            {isLoading ? <Text>Loding....</Text> : (
                <ScrollView>
                    {data.map(country => <CountryInfo key={country.name} {...country}></CountryInfo>)}
                </ScrollView>
                
            )}
        </View>
    )
}
