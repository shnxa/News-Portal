import { useState, FormEvent, useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux"


import Message from "../UI/Message"
import { sendPasswordResetEmail, setError, setSuccess } from "../../store/actions/authActions"
import { RootState } from "../../store"
import Button from '../UI/button'
import Input from "../UI/Input"

const ForgotPassword: FC = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { error,success } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        return () => {
            if(error){
                dispatch(setError(''));
            }
            if (success) {
                dispatch(setSuccess(''));
            }
        }
    },[error, dispatch, success]);

    const submitHandler = async (e: FormEvent) =>{
        e.preventDefault();
        setLoading(true);
        await dispatch(sendPasswordResetEmail(email, 'Email sent!'));
    }

    return (
        <section className = "section">
            <div className = "container">
                <h1>Reset Password</h1>
                <form className="form" onSubmit={submitHandler}>
                    {error&& <Message type='danger' msg ={error}/>}
                    {success&& <Message type='success' msg ={success}/>}
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

                     <Button text ={loading ? "Loading..." : "Send password reset email"} disabled={loading}/>
                </form>
            </div>
        </section>
    )
}


export default ForgotPassword;