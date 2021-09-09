import { FC } from "react";
import { useHistory,Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import Button from '../UI/button'
import { RootState } from "../../store";
import { signOut } from '../../store/actions/authActions' 

const Header: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { authentificated } = useSelector((state: RootState) => state.auth);

    const logoutClickHandler = () => {
        dispatch(signOut());
    }
    

    return (
        <nav className = 'Navbar is-spaced has-shadow'>
            <div className = 'container'>
                <div className="navbar-brand">
                    <Link className = 'navbar-item' to = {!authentificated ? '/':'/dashboard'}></Link>
                </div>

                <div className = 'navbar-end'>
                    <div className="navbar-items">
                        {!authentificated ? <div className =' buttons'>
                            <Button text = "sign up" onClick={()=> history.push('/signup')}/>
                            <Button text = 'sign in' onClick = {() => history.push('/signin')}/>
                        </div>
                        :
                        <Button text = "sign out" onClick={logoutClickHandler}/>}
                    </div>
                </div>
            </div>
        
        </nav> 
    )
}

export default Header;