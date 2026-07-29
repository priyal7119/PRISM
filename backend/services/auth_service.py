from passlib.context import CryptContext
from security.jwt import create_access_token

pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

users = [
    {
        "id": 1,
        "email": "admin@prism.com",
        "password": pwd_context.hash("admin123"),
        "role": "admin"
    },
    {
        "id": 2,
        "email": "demo@prism.com",
        "password": pwd_context.hash("demo1234"),
        "role": "user"
    }
]






def hash_password(password):


    return pwd_context.hash(password)







def verify_password(

    plain_password,

    hashed_password

):


    return pwd_context.verify(

        plain_password,

        hashed_password

    )







def register_user(data):


    user = {


        "id":len(users)+1,


        "email":data["email"],


        "password":

        hash_password(

            data["password"]

        ),


        "role":"user"

    }



    users.append(user)



    return {


        "message":"User registered successfully"

    }








def login_user(data):


    for user in users:



        if user["email"] == data["email"]:



            if verify_password(

                data["password"],

                user["password"]

            ):



                token = create_access_token(

                    {

                        "email":user["email"],

                        "role":user["role"]

                    }

                )



                return {


                    "access_token":token,


                    "token_type":"bearer"

                }





    return {


        "message":"Invalid credentials"

    }