import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function SearchBar({ term, setTerm, onTermSubmit }) {
  return (
    <View className='m-2 bg-gray-300 rounded-xl flex flex-row items-center px-4'>
      <Ionicons name='ios-search-outline' size={24} color='black' />
      <TextInput
        className='ml-2 h-10 text-lg w-full'
        onChangeText={setTerm}
        placeholder='Search'
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}
