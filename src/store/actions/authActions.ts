import { ThunkAction } from 'redux-thunk'
import { SignUpData, AuthAction, SET_USER, User, SET_LOADING, SIGN_OUT, SignInData, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS } from '../types'
import { RootState } from '..'
import firebase from '../../firebase/config'


//sign up
export const signup = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            if (res.user) {
                const userData: User = {
                    email: data.email,
                    firstName: data.firstName,
                    id: res.user.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                };
            await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
            await res.user.sendEmailVerification();
            dispatch({
                type: NEED_VERIFICATION
            });
            dispatch({
                type: SET_USER,
                payload: userData
            });
            }
        } catch (err: any) {
            console.log(err)
            onError();
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}


//get user by id
export const getUserById = (id: string):  ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const user = await firebase.firestore().collection('users').doc(id).get();
          if (user.exists){
              const userData = user.data() as User;
              dispatch ({
                  type: SET_USER,
                  payload: userData
              })
          }
        } catch (err) {
            console.log(err);
        }
    }
}

//set loading
export const setLoading = (value: boolean):  ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch ({
            type: SET_LOADING,
            payload: value
        })
    }
}

//sign in
export const signIn = (data: SignInData, onError: () => void):  ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try{ 
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        } catch (err: any) {
            console.log(err)
            onError();
            dispatch(setError(err.message));
        }
    }
} 


//log out
export const signOut = ():  ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try{
            dispatch(setLoading(true));
            await firebase.auth().signOut();
            dispatch({
                type: SIGN_OUT
            });
        } catch (err: any) {
            console.log(err);
            dispatch(setLoading(false));
        }
    }
}


//set error
export const setError = (msg: string):  ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload: msg
        });
    }
}

//set need verification
export const setNeedVerification = ():  ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: NEED_VERIFICATION
        });
    }
}

//set success
export const setSuccess = (msg: string):  ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUCCESS,
            payload:msg
        });
    }
}

//send password and reset email
export const sendPasswordResetEmail = (email: string, successMsg: string):  ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try{
         await firebase.auth().sendPasswordResetEmail(email)
         dispatch(setSuccess(successMsg));
        } catch (err:any){
            console.log(err)
            dispatch(setError(err.message));
        }

    }
}