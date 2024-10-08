export const filteredData = <T extends { name: { first: string } }>(data: T[], search: string): T[] => {
  return data?.filter((data: T) => {
    return data.name.first.toLowerCase().includes(search.toLowerCase())
  })
}