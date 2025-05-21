import { useState } from "react"
import { schools } from "./data"
import { Input } from "../../atoms/Input"
import { SchoolCard } from "./school-card"
import Spacer from "../../atoms/Spacer"
import { Typography } from "../../atoms/Typography"

export function SchoolFinder() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSchools = schools.filter((school) => {
    const searchText = searchQuery.toLowerCase()
    return school.name.toLowerCase().includes(searchText) || school.address.toLowerCase().includes(searchText)
  })

  return (
    <div className="max-w-xl mx-auto animate-fade-in">
      <Input
        placeholder="Búsqueda por nombre de la escuela o la dirección"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />
      <Spacer size="md" />
      {filteredSchools.length ? <div className="space-y-2 h-max max-h-[calc(100vh-200px)] overflow-auto p-4 bg-white rounded-lg shadow-md">
        {filteredSchools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div> : <div className="text-center mt-10"><Typography variant="h5">Aun no tenemos registrado tu escuela</Typography></div>}
    </div>
  )
}
