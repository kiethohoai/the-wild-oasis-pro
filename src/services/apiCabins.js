import supabase from './supabase';

/* getCabins */
export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be loaded`);
  }

  return data;
}

/* deleteCabin */
export async function deleteCabins(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be delete`);
  }

  return data;
}

/* createCabin */
export async function createCabin(newCabin) {
  const { data, error } = await supabase.from('cabins').insert([newCabin]).select();

  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be created`);
  }

  return data;
}
