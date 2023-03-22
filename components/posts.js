
import Post from './post'
const posts = [{
    id: 1,
    username: 'johndoe',
    userImg: 'https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    img:' https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    description : "This is a test"
},
{
    id: 11,
    username: 'johndoe11',
    userImg: 'https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    img: 'https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    description : "This is a test"
},
{
    id: 2,
    username: 'johndoe2',
    userImg: 'https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    img: 'https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    description : "This is a test"
},
{
    id: 3,
    username: 'johndoe3',
    userImg: 'https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    img: 'https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png',
    description : "This is a test"
}]


const Posts = () => {
  return (
    <>
    <div>
        {posts.map((post) => (
            <Post key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            description={post.description}

            />

        ))}
    </div>
   
    </>
  )
}

export default Posts