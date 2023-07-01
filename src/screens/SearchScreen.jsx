import { View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  const costEffective = results.filter((result) => result.price === '$')
  const bitPricier = results.filter((result) => result.price === '$$')
  const bigSpender = results.filter((result) => result.price === '$$$')
  const bestRating = results.filter((result) => result.rating >= 4.5)

  return (
    <View className='p-2 flex-1'>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        {errorMessage && <Text>{errorMessage}</Text>}
        <ResultsList results={costEffective} header='Cost Effective' />
        <ResultsList results={bitPricier} header='Bit Pricier' />
        <ResultsList results={bigSpender} header='Big Spender' />
        <ResultsList results={bestRating} header='Best Rated' />
      </ScrollView>
    </View>
  )
}
