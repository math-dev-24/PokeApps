import type {detailPokemon, Pokemon} from "@/shared/interfaces/pokemon.interface";


export  async function getAllPokemon(): Promise<Pokemon[]> {
    return await (await  fetch("https://pokebuildapi.fr/api/v1/pokemon")).json()
}

export  async function getDetailPokemon(name: string): Promise<detailPokemon> {
    return await (await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)).json()
}

export async function getAllType(): Promise<any>{
    return await (await fetch("https://pokebuildapi.fr/api/v1/types")).json()
}