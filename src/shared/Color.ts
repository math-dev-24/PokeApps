export function ReturnColorByType(types: string) : string
{
    let color = "bg-slate-200"

    switch (types){
        case "Feu":
            color = "bg-red-100"
            break
        case "Vol":
            color = "bg-cyan-100"
            break
        case "Poison":
            color= "bg-purple-100"
            break
        case "Eau":
            color = "bg-blue-100"
            break
        case "Insecte":
        case "Plante":
            color = "bg-green-100"
            break
        case "Électrik":
            color= "bg-yellow-100"
            break
        case "Sol":
        case "Combat":
            color = "bg-brown-200"
            break
        case "Psy":
            color = "bg-orange-200"
            break
        case "Acier":
            color = "bg-gray-100"
            break
        case "Dragon":
            color = "bg-indigo-200"
            break
        case "Fée":
            color= "bg-pink-200"
    }

    return  color
}