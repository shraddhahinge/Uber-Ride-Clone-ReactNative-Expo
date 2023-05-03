import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'
export default function HomeScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const setLocationOrigin = (location, description ) => {

        dispatch(setOrigin({
    location,
    description
        }))
    } 
    const setLocationDestination = () => {
        dispatch(setDestination(null))
    }

    // console.log('key', GOOGLE_MAPS_APIKEY)
  return (
    <SafeAreaView style={tw`bg-white h-full`} >
      <View style={tw`p-5`} >
        <Image
        style={{
            width:100,
            height:100,
            resizeMode:'contain'
        }}
        source={{
            uri:'https://links.papareact.com/gzs'
        }}

        />
         <GooglePlacesAutocomplete
      placeholder='Where From?'
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
      styles={{
        container:{
            flex:0
        },
        textInput:{
            fontSize:18
        }
      }}
      fetchDetails
      returnKeyType={'search'}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data.description)
        setLocationOrigin(details.geometry.location, data.description)
        setLocationDestination()
          }}
      enablePoweredByContainer={false}
      
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
        <NavOptions />
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})