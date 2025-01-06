import { AxiosResponse } from 'axios';
import { ISpecie } from '../utils/types/pokemon.type';
import api from './api.service';

export async function getAllPokemons(): Promise<AxiosResponse<ISpecie[]>> {
  return await api.get('pokemon?offset=20&limit=20');
}
