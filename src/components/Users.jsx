import { useLoaderData } from "react-router-dom"

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1>{users.length}</h1>
            {console.log(users.length)}
            {users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)}
        </div>
    )
}

export default Users