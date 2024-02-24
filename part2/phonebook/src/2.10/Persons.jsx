export default function Persons({ persons, search }) {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person) => (
          <p key={person.name}>
            <span>{person.name}</span>
            <span>&nbsp;</span>
            <span>{person.number}</span>
          </p>
        ))}
    </div>
  );
}
