import { useState, FormEvent, useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"


import Message from "../UI/Message"
import { signup, setError } from "../../store/actions/authActions"
import { RootState } from "../../store"
import Button from '../UI/button'
import Input from "../UI/Input"

const SignUp: FC = () => {
    const [firstName, setFirstName] = useState('');
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
        dispatch(signup({email, password, firstName}, ()=> setLoading(false)));
    }

    return (
        <section className = "section">
            <div className = "container">
                <h1>Sign Up</h1>
                <form className="form" onSubmit={submitHandler}>
                    {error&& <Message type='danger' msg ={error}/>}
                    <Input
                     name = "firstName" 
                     value = {firstName} 
                     onChange={(e) => setFirstName(e.currentTarget.value)}
                     placeholder ="First Name" 
                     label = "First Name"/>
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

                     <Button text ={loading ? "Loading..." : "Sign Up"} disabled={loading} />
                </form>
            </div>
        </section>
    )
}


export default SignUp;