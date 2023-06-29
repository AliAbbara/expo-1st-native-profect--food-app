import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 503vQVXO0isVWlgdSPPSaQ37i_irpP3WChZeTT5eEyjRiPZiSnpW1fJsUMa1YG7r6Xru2CFr0FeJX1DneYISTk9sbDEUf9jcejGjlF-jsMqZt21O1p6QxZj-7labZHYx',
  },
})
