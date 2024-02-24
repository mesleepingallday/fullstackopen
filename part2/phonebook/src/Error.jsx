export default function Error({message}) {
    if (message === null) {
        return null;
      }
  return (
    <div className="error">{message}</div>
  )
}
