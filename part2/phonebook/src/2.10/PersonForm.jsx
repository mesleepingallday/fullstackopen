export default function PersonForm({
  newName,
  newNumber,
  handleChangeName,
  handleChangeNumber,
  handleClick,
}) {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        number:{" "}
        <input
          type={"number"}
          value={newNumber}
          onChange={handleChangeNumber}
        />
      </div>
      <div>
        <button onClick={handleClick} type="submit">
          add
        </button>
      </div>
    </form>
  );
}
