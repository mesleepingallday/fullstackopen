export default function Persons({ persons, search, handleDelete }) {
  return (
    <div>
      {persons
        .filter(
          (person) =>
            person.name &&
            person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person) => (
          <p key={person.name}>
            <span>{person.name}</span>
            <span>&nbsp;</span>
            <span>{person.number}</span>
            <span>&nbsp;</span>
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </p>
        ))}
    </div>
  );
}
