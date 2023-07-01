import { View, Text, Image, ActivityIndicator, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default function ShowScreen({ route }) {
  const [item, setItem] = useState(null)
  const id = route.params.id

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`)
    setItem(res.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (item === null) {
    return <ActivityIndicator size='large' />
  }

  return (
    <View className='p-2 flex-1'>
      <Text className='text-2xl'>{item.name}</Text>
      <View className='flex flex-row justify-between'>
        <View>
          <Text>Address: {item.location.address1}</Text>
          <Text>Rating: {item.rating} Stars</Text>
          <Text>Phone: {item.display_phone}</Text>
        </View>
        <View>
          <Text>{item.review_count} Reviews</Text>
          <Text>Status: {item.isClosed ? 'Closed' : 'Open Now'}</Text>
          <Text>Price: {item.price} of $$$$$</Text>
        </View>
      </View>
      <FlatList
        data={item.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item }}
              className='h-48 w-auto my-1 rounded-lg'
            />
          )
        }}
      />
    </View>
  )
}
