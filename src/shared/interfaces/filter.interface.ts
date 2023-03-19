
export interface FilterInterface{
    search: string,
    types: string
}

export interface FilterUpdate{
    search? : string,
    types? : string
}

export const DEFAULT_FILTER: FilterInterface = {
    search: '',
    types: "all"
}