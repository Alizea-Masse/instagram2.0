import {useEffect, useState} from 'react'
import {faker} from '@faker-js/faker'

const Suggestions = () => {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      company: faker.company.companyName(),
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);


  return (
    <>
    <div className='flex items-center justify-between mt-4 ml-10'>
      <p className='text-sm font-bold text-gray-400'>Suggestions pour toi</p>
      <p className='text-sm'>Voir tout</p>
    </div>

    {suggestions.map((profile) => (
      <div key={profile.id} className='flex items-center justify-between mt-4 ml-10'>
     <img className='h-10 w-10 rounded-full border p-[2px]' src={profile.avatar} alt="" />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{profile.username}</h2>
        <h3 className='text-sm text-gray-400'>Travaille pour {profile.company}</h3>
        </div>
        <button className='text-blue-400 text-sm font-semibold'>Suivre</button>
    </div>
    ))}
    </>
    
  )
}

export default Suggestions