import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
const data = [
    {
        id:'123',
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'Map'
    },
    {
        id:'456',
        title:'Order Food',
        image:'https://w7.pngwing.com/pngs/531/445/png-transparent-noodles-in-white-bowl-chinese-cuisine-japanese-cuisine-take-out-breakfast-drawing-cute-cartoon-painted-noodle-bowl-watercolor-painting-cartoon-character-food.png',
        screen:'Eats'
    }
]
const NavOptions = () => {
    const navigation = useNavigation()
const origin = useSelector(selectOrigin)
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item})=> (
        <TouchableOpacity 
        onPress={()=> navigation.navigate(item.screen)}
        disabled={!origin}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}  >
           <View style={tw`${!origin && 'opacity-20' }`} >
            <Image
            source={{uri: item.image}}
            style={{width:120, height:120, resizeMode:'contain'}}
            />
            <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
            <Icon
            type='antdesign'
            color='white'
            name='arrowright'
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            />
           </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})