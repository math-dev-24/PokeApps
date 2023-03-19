export interface Pokemon{
    name : string,
    image: string,
    stats: {
        HP: number,
        attack: number,
        defense: number,
        special_attack: number,
        special_defence: number,
        speed: number
    },
    apiTypes: apiTypes[]
}

export interface detailPokemon{
    id: number,
    pokedexId: number,
    name: string,
    image: string,
    sprite: string,
    slug: string,
    stats: {
        HP: number,
        attack: number,
        defense: number,
        special_attack: number,
        special_defense: number,
        speed: number
    },
    apiTypes: apiTypes[],
    apiGeneration: number,
    apiResistances: apiResistance[],
    apiEvolutions: evolution[]
    apiPreEvolution: any
}

interface apiTypes{
    name: string,
    image: string
}

interface apiResistance{
    name: string,
    damage_multiplier: string,
    damage_relation: string
}

interface evolution{
    name: string,
    pokedexId: number,
}
export interface Types{
    id: number,
    name: string,
    image: string,
}