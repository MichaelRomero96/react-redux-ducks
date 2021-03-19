import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCheckout } from '../redux/checkoutDucks';
import { getUserData, loginAction, logoutAction, productChangeAction } from '../redux/mainDucks';

function MyComponent() {
    const [userData, setUserData] = useState(true)
    const { mainUser, products, user } = useSelector(store => store.main)
    const [checkout] = useState([
        { id: 1, name: 'product#1' },
        { id: 2, name: 'product#2' },
        { id: 3, name: 'product#3' },
    ])
    const dispatch = useDispatch();
    const handleAuthLogout = () => {
        dispatch(logoutAction());
    }
    const handleAuthLogin = () => {
        dispatch(loginAction());
    }

    useEffect(() => {
        if (userData) {
            dispatch(getUserData())
        }
        setUserData(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkoutHandler = () => {
        dispatch(updateCheckout(checkout))
    }
    return (
        <div>
            <h1>My component</h1>
            <h2>User: {mainUser?.name}</h2>
            <button
                onClick={handleAuthLogin}>
                Login
                </button>
            <button
                onClick={handleAuthLogout}
            >
                Logout
                </button>
            {products?.map(product => (
                <li key={product.id}>
                    <h2>{product.title}</h2>
                </li>
            ))}

            <h1>users from TipyCode</h1>
            {user.map(user => (
                <li key={user.id}>
                    <h2>{user.name}</h2>
                </li>
            ))}
            <button>delete</button>
            <button
                onClick={() => dispatch(productChangeAction())}
            >change</button>
            <button
                onClick={checkoutHandler}>add element</button>
        </div>
    )
}

export default MyComponent
