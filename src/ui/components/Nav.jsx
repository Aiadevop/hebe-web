import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

import '../css/nav.css'


export const Nav = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    // console.log(user);

    const [menuOpened, setMenuOpened] = useState(false);


    const lastPath = localStorage.getItem('lastPath') || '/';

    const onLogIn = () => {

        navigate(lastPath, {
            replace: true
        })
    }

    const onLogOut = () => {

        navigate(lastPath, {
            replace: true
        })
        logout();
    }



    return (
        <>
            <nav className='navbar'>
                <div className="navelements">
                    <div className='grupo1'>
                        <img src="\resources\iconos\hamburguesa.png" className='toggle logoHebe' onClick={() => setMenuOpened(!menuOpened)} alt="Menu Hamburguesa" />

                        <li className='nav-menu-item'>
                            <Link to="/" className='logo nav-link nav-link' onClick={() => setMenuOpened(false)}>
                                <img src="\resources\img\logos\hebeNegro.png" className="logoHebe" alt="HebeTaekwondoLogo" />
                            </Link>
                        </li>
                    </div>


                    <div className='grupo2'>

                        <ul className={menuOpened ? 'nav-menu nav-menu_visible' : 'nav-menu'}  >

                            <li className='nav-menu-item ho'>
                                <NavLink className="nav-menu-link nav-link" to="/taekwondo" onClick={() => setMenuOpened(!menuOpened)}>Taekwondo</NavLink>
                            </li>
                            <li className='nav-menu-item ho'>
                                <NavLink className="nav-menu-link nav-link" to="/pilates" onClick={() => setMenuOpened(!menuOpened)}>Pilates</NavLink>
                            </li>
                            <li className='nav-menu-item ho'>
                                <NavLink className="nav-menu-link nav-link" to="/funcore" onClick={() => setMenuOpened(!menuOpened)}>FunCore</NavLink>
                            </li>
                            <li className='nav-menu-item ho'>
                                <NavLink className="nav-menu-link nav-link" to="/tricking" onClick={() => setMenuOpened(!menuOpened)}>Tricking</NavLink>
                            </li>
                            <br></br>
                                      <li className='nav-menu-item carrologin'>
                                <NavLink className="" to="/login">
                                    <button className='botonicon'><img src="\resources\iconos\usuario2.png" className="login" alt="Login" /></button>
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                    <div className='grupo3'>

                        {/* <li className='nav-menu-item ne '>
                            <NavLink className="nav-menu-link nav-link carro" to="/carrito">
                                <img src="../src/ui/iconos/carro1.png" className="logoHebe " alt="Carro Compra" />
                            </NavLink>
                        </li> */}
                        <li className='nav-menu-item ne'>
                            <NavLink className="" to="/login">
                                <button className='botonicon'><img src="\resources\iconos\usuario2.png" className="logoHebe" alt="Login" /></button>
                            </NavLink>
                        </li>
                    </div>

                </div>

            </nav>

        </>
    )
}
