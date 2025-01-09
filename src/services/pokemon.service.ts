import { AxiosResponse } from 'axios';
import { IPagination } from '../utils/types/pagination.type';
import { ISpecie } from '../utils/types/pokemon.type';
import api from './api.service';

export async function getAllPokemons(): Promise<AxiosResponse<IPagination<ISpecie>>> {
  return await api.get('pokemon?offset=20&limit=20');
}
