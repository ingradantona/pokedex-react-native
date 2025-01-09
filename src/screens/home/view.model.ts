import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { getAllPokemons } from '../../services/pokemon.service';
import { IPokemon } from '../../utils/types/pokemon.type';

export default function useHomeViewModel() {
  const { data: pokemonListData } = useQuery({
    queryKey: ['pokemin-list'],
    queryFn: getAllPokemons,
    select: async (data) => {
      const promises = data.data.results.map((pokemon) => axios.get(pokemon.url));

      return (await Promise.all(promises)) as AxiosResponse<IPokemon>[];
    },
  });

  return { pokemonListData };
}
