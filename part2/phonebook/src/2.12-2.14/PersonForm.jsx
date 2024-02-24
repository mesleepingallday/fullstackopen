export default function PersonForm({
  newName,
  newNumber,
  handleChangeName,
  handleChangeNumber,
  handleClick,
}) {
  return (
    <form onSubmit={handleClick}>
      <div>
        name: <input value={newName} onChange={handleChangeName} required />
      </div>
      <div>
        number:{" "}
        <input
          type={"number"}
          value={newNumber}
          onChange={handleChangeNumber}
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
