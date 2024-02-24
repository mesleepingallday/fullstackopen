import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import phonebooksService from "./services/phonebooks";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({});

  useEffect(() => {
    phonebooksService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const isAdded = (name) => {
    return persons.some((person) => person.name === name);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (isAdded(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const id = persons.find((person) => person.name === newName).id;
        phonebooksService
          .update(id)
          .then(() => {
            setPersons(
              persons.map((person) =>
                person.name === newName
                  ? { ...person, number: newNumber }
                  : person
              )
            );
          })
          .catch((error) => {
            const errorChangeOnDeleted = {
              type: "error",
              data: `Information of ${newName} has already been removed from server`,
            };
            setMessage(errorChangeOnDeleted);
            setTimeout(() => {
              setMessage({});
            }, 5000);
            setPersons(persons.filter((person) => person.id !== id));
          });
      }
      setNewName("");
      setNewNumber("");
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };
    phonebooksService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
    });
    setNewName("");
    setNewNumber("");
    const successAdded = {
      type: "success",
      data: `Added ${newName}`,
    };
    setMessage(successAdded);
    setTimeout(() => {
      setMessage({});
    }, 5000);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      phonebooksService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };
  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleClick={handleClick}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
