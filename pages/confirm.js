import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {
  const getCoordinates = () => {
    const location = 'Santa Monica'
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiZGRlbHJpbzk1IiwiYSI6ImNrdmxwdW9zeTFhdXgydXFnOHJhaGQyamEifQ.ZiWpY6lvj6i918eaXM85tA',
          limit: 1,
        })
    )
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data)
      })
  }

  useEffect(() => {
    getCoordinates()
  }, [])

  return (
    <Wrapper>
      <Map />
      <RideContainer>Ride Selector Confirm Button</RideContainer>
    </Wrapper>
  )
}

export default Confirm

const RideContainer = tw.div`
flex-1
`

const Wrapper = tw.div`
flex h-screen flex-col
`
