import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User";
import { fetchUsersAction } from "../../redux/actions";

function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    console.log(users)

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user} />)}
        </div>
    )
}

export default UsersPage;