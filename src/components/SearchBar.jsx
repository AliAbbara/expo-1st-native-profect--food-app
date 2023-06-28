import { View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import React from 'react'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  return (
    <View className='m-4'>
      <TextInput
        className='bg-gray-300 rounded-md px-4 py-1 w-full'
        onChangeText={setSearch}
        placeholder='Search'
        value={search}
      />
    </View>
  )
}
