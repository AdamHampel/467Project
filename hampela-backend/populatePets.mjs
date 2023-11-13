import { createPet } from './pets-model.mjs';

const populatePets = async () => {
    const petsData = [
        { name: 'Fluffy', type: 'cat', age: 2 },
        { name: 'Rover', type: 'dog', age: 3 }
        // Add more pets here
    ];

    for (const petData of petsData) {
        await createPet(petData.name, petData.type, petData.age);
    }

    console.log('Pets populated successfully.');
};

populatePets().catch(err => console.error('Error populating pets:', err));