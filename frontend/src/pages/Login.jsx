// src/pages/Login.jsx


import AuthForm from "../components/auth/AuthForm";


import useAuthStore from "../store/authStore";


import { useNavigate } from "react-router-dom";



import "../styles/auth.css";





function Login(){



    const loginUser =

    useAuthStore(

        (state)=>state.loginUser

    );




    const navigate = useNavigate();






    const handleLogin = async(data)=>{


        const response =

        await loginUser(data);




        if(response.access_token){


            navigate("/dashboard");


        }


    };







    return (



        <div className="auth-page">



            <AuthForm

                mode="login"

                onSubmit={handleLogin}

            />



        </div>



    );


}



export default Login;