// src/components/auth/AuthForm.jsx


import { useState } from "react";


function AuthForm({

    mode,

    onSubmit

}){



    const [form,setForm] = useState({

        email:"",

        password:""

    });






    const handleChange = (e)=>{


        setForm({

            ...form,

            [e.target.name]:

            e.target.value

        });


    };






    const handleSubmit = (e)=>{


        e.preventDefault();



        onSubmit(form);


    };







    return (



        <form

            className="auth-form"

            onSubmit={handleSubmit}

        >






            <h2>


                {

                mode === "login"

                ?

                "Login"

                :

                "Create Account"

                }


            </h2>







            <input


                type="email"


                name="email"


                placeholder="Email"


                value={form.email}


                onChange={handleChange}


                required


            />








            <input


                type="password"


                name="password"


                placeholder="Password"


                value={form.password}


                onChange={handleChange}


                required


            />









            <button


                type="submit"


                className="auth-btn"


            >



                {

                mode === "login"

                ?

                "Login"

                :

                "Register"

                }



            </button>







        </form>



    );


}



export default AuthForm;