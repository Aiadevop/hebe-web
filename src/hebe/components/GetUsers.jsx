import React from 'react'

export const GetUsers = ({onSubmitGetUsers}) => {
    return (
        <>
            <form onSubmit={onSubmitGetUsers}>
                <input type="submit" value="Mostrar usuarios" />
            </form>
            <div className='users'>
                <ol>
                    {
                        users.map(({ id, nombre, correo }) => (
                            <>
                                <li key={id}>
                                    {nombre}
                                    <br />
                                    {correo}
                                </li>
                            </>
                        ))}
                </ol>
            </div>
        </>
    )
}
