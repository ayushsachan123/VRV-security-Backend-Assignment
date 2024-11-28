import NewNoteForm from './NewNoteForm'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const NewNote = () => {
    useTitle('techNotes: New Note')

    const { users, refetch } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids
                ?.map(id => data?.entities[id])
                .filter(Boolean), // Filter out null or undefined values
        }),
    })

    // If users are not available, trigger refetch and show loader
    if (!users?.length) {
        refetch(); // Optional: Refetch the data if it's not loaded properly
        return <PulseLoader color={"#FFF"} />
    }

    const sanitizedUsers = users.map(user => ({
        ...user,
        username: user?.username || 'Unknown User', // Fallback for missing username
    }))

    const content = <NewNoteForm users={sanitizedUsers} />

    return content
}

export default NewNote
