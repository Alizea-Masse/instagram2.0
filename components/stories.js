import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./story.js";
import { useSession } from "next-auth/react";


const Stories = () => {
  const {data} = useSession();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
     
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll">
      {data && (
        <Story img = {data?.user.image} username={data?.user.username}/>
      )}
      {suggestions.map((profile) => (
         <Story
         keys={profile.userId}
         img={profile.avatar}
         username={profile.username}
         />
      ))}
  
      
    </div>
  );
};

export default Stories;
