export async function getStaticProps() {
  const avatars = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar').then(res => res.json());
  return {
    props: {
      avatars
    }
  }
}

export default function Avatars({ avatars }) {
  <ul>
    {avatars.map(avatar => {
      return (
        <li key={avatar._id}>{ avatar.name }</li>
      )
    })}
  </ul>
}