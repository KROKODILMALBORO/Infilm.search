export const getPersonsByProfession = (key, persons) => {
    return (persons || []).filter(function(person) {
        return person.professionKey === key
    })
}
