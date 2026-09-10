export async function load() {
    const res = await fetch('https://fdnd.directus.app/items/person?filter[name][_icontains]=mathijs')
    if (!res.ok) {
        throw new Error(`Directus error: ${res.status}`)
    }
    const personResponseJSON = await res.json()
    return {
        person: personResponseJSON.data
    }
}