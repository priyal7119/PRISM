// src/pages/Register.jsx


import AuthForm from "../components/auth/AuthForm";


import useAuthStore from "../store/authStore";


import { useNavigate } from "react-router-dom";



import "../styles/auth.css";






function Register(){



    const registerUser =

    useAuthStore(

        (state)=>state.registerUser

    );




    const navigate = useNavigate();







    const handleRegister = async(data)=>{



        const response =

        await registerUser(data);




        if(response.message){


            navigate("/login");


        }


    };







    return (



        <div className="auth-page">





            <AuthForm


                mode="register"


                onSubmit={handleRegister}


            />





        </div>



    );


}



export default Register;