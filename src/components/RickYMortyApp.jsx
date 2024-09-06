import {useEffect, useState} from 'react'

export const RickYMortyApp = () => {
  const [character, setCharacter] = useState()
  useEffect(() =>{
    const reqCharacter = async () => {
      const resp = await fetch('https://rickandmortyapi.com/api/character')
      const data = await resp.json()

      setCharacter()
    }
  }, [])



  return (
    <>
      {
        character && (
          <div>
            <h1>{character.name}</h1>
            <p>{character.species}</p>
            <img src={character.image} alt={character.name} />
          </div>
        )





      }    
    </>
  )
}
