import { useSearchParams } from 'react-router-dom'
import Title from './Title'
import { useEffect, useState } from 'react'

const SearchTitles = () => {
  const [titleList, setTitles] = useState([])
  const [searchParams] = useSearchParams()
  const [error, setError] = useState()
  let title = searchParams.get('title')

  useEffect(() => {
    const getTitleDetails = async () => {
      const url = `https://imdb8.p.rapidapi.com/title/find?q=${title}`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'febfb4ee14mshe5d5db9d2d21fa6p15344fjsnac84ecdeaa78	',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()
        const loadedTitles = []
        let results = result.results
        console.log(results)
        if (!results) {
          setError('Title not Found!')
        }
        for (const key in results) {
          // console.log(key);
          loadedTitles.push(results[key])
        }
        setTitles(loadedTitles)
        // console.log();
      } catch (error) {
        console.log('******')
        console.error(error)
        console.log('******')
      }
    }
    getTitleDetails()
  }, [])
  const tilte = titleList.map(res => <Title props={res} key={res.id}></Title>)
  return (
    <>
      {
        <div className='container text-center'>
          {error && <p className='display-6 fw-bold mt-5 pt-5'>{error}</p>}
          {error == null && (
            <div className=' col-12 d-flex mx-auto flex-wrap justify-content-center'>
              {tilte}
            </div>
          )}
        </div>
      }
    </>
  )
}
export default SearchTitles
