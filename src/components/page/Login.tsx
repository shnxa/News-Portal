import { useState, FormEvent, useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


import Message from "../UI/Message"
import { signIn, setError } from "../../store/actions/authActions"
import { RootState } from "../../store"
import Button from '../UI/button'
import Input from "../UI/Input"

const SignIn: FC = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { error } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        return () => {
            if(error){
                dispatch(setError(''));
            }
        }
    },[error, dispatch]);

    const submitHandler = async (e: FormEvent) =>{
        e.preventDefault();
        setLoading(true);
        dispatch(signIn({email, password}, ()=> setLoading(false)));
    }

    return (
        <section className = "section">
            <div className = "container">
                <h1>Sign Up</h1>
                <form className="form" onSubmit={submitHandler}>
                    {error&& <Message type='danger' msg ={error}/>}
                    
                    <Input
                     type = "email"
                     name = "email" 
                     value = {email} 
                     onChange={(e) => setEmail(e.currentTarget.value)}
                     placeholder ="Email address" 
                     label = "Email address"/> 
                    <Input
                     type = "password"
                     name = "password" 
                     value = {password} 
                     onChange={(e) => setPassword(e.currentTarget.value)}
                     placeholder ="Password" 
                     label = "Password"/>
                     <p><Link to="/forgot-password">Forgot your password?</Link></p>

                     <Button text ={loading ? "Loading..." : "Sign In"} disabled={loading}/>
                </form>
            </div>
        </section>
    )
}


export default SignIn;