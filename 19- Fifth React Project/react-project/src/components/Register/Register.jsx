import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import RegisterStyle from './Register.module.css'

export default function Register() {

    let [userData, setUserData] = useState({
        id: "",
        userName: "",
        userEmail: "",
        userPassword: "",
    });

    let [message, setMessage] = useState({ type: "", text: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage({ type: "", text: "" });

        try {
            setLoading(true);
            let response = await axios.post(`https://fakestoreapi.com/users`, {
                id: userData.id || 0,
                username: userData.userName,
                email: userData.userEmail,
                password: userData.userPassword,
            });

            if (response.status === 200 || response.status === 201) {
                setMessage({ type: `success`, text: `Registration Success!` });
                navigate('/hero');
                toast.success('Registration Success');
            }
        } catch (error) {
            setMessage({ type: `error`, text: `Registration Failed!` });
            toast.error('Registration Failed');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <Toaster position="top-center" reverseOrder={false} gutter={8} containerClassName="" containerStyle={{}} toastOptions={{ className: '', duration: 5000, removeDelay: 1000,
                style: {
                    background: '#1C2321',
                    color: '#fff',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '0.85rem',
                },
                success: {
                    duration: 5000,
                    iconTheme: {
                        primary: '#2E8B57',
                        secondary: '#fff',
                    },
                },
            }}/>
        <div className={RegisterStyle.page}>
            <div className={RegisterStyle.editorWindow}>
                <div className={RegisterStyle.titleBar}>
                    <span className={`${RegisterStyle.dot} ${RegisterStyle.dotRed}`}></span>
                    <span className={`${RegisterStyle.dot} ${RegisterStyle.dotYellow}`}></span>
                    <span className={`${RegisterStyle.dot} ${RegisterStyle.dotGreen}`}></span>
                    <span className={RegisterStyle.fileName}>Register.jsx</span>
                </div>
                <div className={RegisterStyle.body}>
                    <h2>Register</h2>
                    <p className={RegisterStyle.subtitle}>// create a new account</p>
                    <form onSubmit={handleSubmit}>
                        <input type="number" className={`form-control my-3 ${RegisterStyle.input}`} name='id' id='id' placeholder='Enter Your ID' onChange={handleChange} required />
                        <input type="text" className={`form-control my-3 ${RegisterStyle.input}`} name='userName' id='userName' placeholder='Enter Your UserName' onChange={handleChange} required />
                        <input type="email" className={`form-control my-3 ${RegisterStyle.input}`} name='userEmail' id='userEmail' placeholder='Enter Your Email' onChange={handleChange} required />
                        <input type="password" className={`form-control my-3 ${RegisterStyle.input}`} name='userPassword' id='userPassword' placeholder='Enter Your Password' onChange={handleChange} required />
                        <button type="submit" className={`btn btn-primary my-2 ${RegisterStyle.submitBtn}`} disabled={loading}>
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </form>
                    {message.text && (
                        <div className={`${RegisterStyle.message} ${message.type === 'success' ? RegisterStyle.messageSuccess : RegisterStyle.messageError}`}>
                            {message.text}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}