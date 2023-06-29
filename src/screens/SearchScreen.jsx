import { View, Text } from 'react-native'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'

export default function SearchScreen() {
  const [term, setTerm] = useState('')

  const onSearchSubmit = () => {
    console.log(term)
  }

  return (
    <View className='p-2'>
      <SearchBar term={term} setTerm={setTerm} onTermSubmit={onSearchSubmit} />
      <Text className=''>Search Screen</Text>
    </View>
  )
}
