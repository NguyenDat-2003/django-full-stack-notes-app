import { Filter } from '../components/Filter'
import { NoteCardContainer } from '../components/NoteCardContainer'

export const HomePage = ({ notes, loading }) => {
  return (
    <>
      <Filter />
      <NoteCardContainer notes={notes} loading={loading} />
    </>
  )
}
