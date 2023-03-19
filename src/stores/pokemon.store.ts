import {defineStore} from "pinia";
import type {detailPokemon, Pokemon, Types} from "@/shared/interfaces/pokemon.interface";
import {getAllPokemon, getAllType, getDetailPokemon} from "@/shared/services/pokemon.service";
import type {FilterInterface, FilterUpdate} from "@/shared/interfaces/filter.interface";
import {DEFAULT_FILTER} from "@/shared/interfaces/filter.interface";


interface pokemonState {
    pokemons: Pokemon[],
    isLoaded: boolean,
    detailPokemon: detailPokemon | any,
    detailIsLoaded: boolean,
    filters: FilterInterface,
    types: Types[]
}



export const usePokemon = defineStore("pokemon",{
    state: (): pokemonState => ({
        pokemons : [],
        isLoaded: false,
        detailPokemon: false,
        detailIsLoaded: false,
        filters: {...DEFAULT_FILTER},
        types: []
    }),
    getters: {
        filteredPokemon(state){
            return state.pokemons.filter(p => {
                return p.name.toLocaleLowerCase().startsWith(state.filters.search.toLocaleLowerCase())
                && (state.filters.types == "all" || p.apiTypes.filter(e => e.name == state.filters.types).length > 0 )
            })
        }
    },
    actions: {
        async fetchPokemon(){
            this.pokemons = await getAllPokemon()
            this.types = await getAllType()
            this.isLoaded = true
        },
        async fecthDetailPokemon(name: string){
            this.detailPokemon = await getDetailPokemon(name)
            this.detailIsLoaded = true
        },
        updateFilter(updateFilter: FilterUpdate){
            if (updateFilter.search !== undefined){
                this.filters.search = updateFilter.search
            }
            if(updateFilter.types !== undefined){
                this.filters.types = updateFilter.types
            }
        }
    }
})



export function initialFectPokemon ()
{
    const pokemonStore = usePokemon()

    if (!pokemonStore.isLoaded){
        pokemonStore.fetchPokemon()
    }
}