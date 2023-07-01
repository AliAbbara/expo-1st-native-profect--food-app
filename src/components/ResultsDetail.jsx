import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ResultsDetail({ item }) {
  const navigation = useNavigation()

  return (
    <View className='flex h-48 w-60 py-1 px-2 m-1 rounded-lg'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Show', { id: item.id })}>
        <Image
          className='h-36 w-56 rounded-lg self-center'
          source={{ uri: item.image_url }}
        />
      </TouchableOpacity>
      <Text className='font-medium'>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  )
}
