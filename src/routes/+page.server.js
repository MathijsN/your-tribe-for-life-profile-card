import { createDirectus, rest, readItems } from '@directus/sdk';
const directus = createDirectus('https://fdnd.directus.app').with(rest());

export async function load() {
    const person = await directus.request(
        readItems('person', {
            filter: {
                name: {
                    _icontains: 'mathijs'
                }
            }
        })
    )
    return {
        person: person
    }
}