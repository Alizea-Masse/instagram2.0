import { getProviders } from 'next-auth/react'

const signIn = () => {
  return (
    <div>signIn</div>
  )
}

export async function getServerSideProps(context) {
    const providers = getProviders()
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default signIn