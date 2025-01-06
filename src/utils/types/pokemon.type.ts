export interface IPokemon {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  held_items: any[];
  name: string;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: 0;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: ISpecie;
  sprites: {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    other: {
      dream_world: {
        front_default: null | string;
        front_female: null | string;
      };
      home: {
        front_default: null | string;
        front_female: null | string;
        front_shiny: null | string;
        front_shiny_female: null | string;
      };
      'official-artwork': {
        front_default: null | string;
        front_shiny: null | string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
}

export interface ISpecie {
  name: string;
  url: string;
}
