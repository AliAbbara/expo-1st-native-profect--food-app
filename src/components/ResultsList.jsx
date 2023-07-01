import { View, Text, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'

export default function ResultsList({ header, results }) {
  return (
    <View className='overflow-visible'>
      <Text className='text-lg font-bold'>
        {header} ({results.length})
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail item={item} />
        }}
      />
    </View>
  )
}
