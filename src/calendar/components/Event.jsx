export default function Event({ event }) {

  const { title, user } = event

  return (
    <div>
      <strong>{title}</strong>
      <br />
      <span>{user.name}</span>
    </div>
  )
}