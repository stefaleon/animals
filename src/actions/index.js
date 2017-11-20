export const selectAnimal = (animalId) => {
  return {
    type: 'select_animal',
    payload: animalId
  };
};
