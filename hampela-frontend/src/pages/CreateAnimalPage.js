import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateAnimalPage = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');

    const history = useHistory();

    const addAnimal = async () => {
        const newAnimal = { name, type, age };
        const response = await fetch('/pets', {
            method: 'post',
            body: JSON.stringify(newAnimal),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the pet!");
        } else {
            alert(`Failed to add pet, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
            <article>
                <h2>Add a Pet</h2>
                <p>Add a Pet With its Name, Species, and Age.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Pet Info</legend>
                        <label for="name">Name</label>
                        <input
                            type="text"
                            placeholder="Pet Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name" />

                        <label for="type"> Type</label>
                        <input
                            type="text"
                            value={type}
                            placeholder="Type"
                            onChange={e => setType(e.target.value)}
                            id="type" />

                        <label for="age"> Age</label>
                        <input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            id="age" />

                        <label for="submit">
                            <button
                                type="submit"
                                onClick={addAnimal}
                                id="submit"
                            >Add</button></label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateAnimalPage;