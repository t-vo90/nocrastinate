const { default: Axios } = require('axios')

module.exports = async function awesomeAnimeQuotes() {
  try {
    const animeResponse = await Axios.get('https://animechan.vercel.app/api/random')
    // return animeResponse.data
    console.log(animeResponse.data)
  } catch (err) {
    console.error(err)
  }
}
