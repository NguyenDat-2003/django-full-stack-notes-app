import NoteCard from './NoteCard'

export const NoteCardContainer = () => {
  return (
    <div className='container'>
      <div className='note-has-grid row'>
        <NoteCard color='green' />
        <NoteCard color='purple' />
        <NoteCard color='blue' />

        <NoteCard color='green' />
        <NoteCard color='purple' />
        <NoteCard color='blue' />

        <NoteCard color='green' />
        <NoteCard color='purple' />
        <NoteCard color='blue' />
      </div>
    </div>
  )
}
