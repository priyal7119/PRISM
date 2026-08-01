import { create } from "zustand";

import {
    getCopilotData,
    sendMessage,
    clearCopilotConversation
} from "../api/copilot";



const useCopilotStore = create((set, get) => ({


    copilotData:null,


    messages:
        JSON.parse(
            localStorage.getItem(
                "prism_copilot_messages"
            )
        ) || [],



    loading:false,


    sending:false,


    typing:false,


    error:null,





    fetchCopilot:async()=>{


        try{


            set({

                loading:true,

                error:null

            });



            const data =
                await getCopilotData();




            set({


                copilotData:data,



                messages:

                    get().messages.length > 0

                    ?

                    get().messages

                    :

                    data.conversation_history || []

            });





        }
        catch(error){


            console.error(
                "Copilot loading error:",
                error
            );


            set({

                error:error.message

            });



        }
        finally{


            set({

                loading:false

            });


        }


    },







    send:async(message)=>{


        if(
            !message.trim() ||
            get().sending
        )
            return;




        const userMessage={


            role:"user",


            message:message,


            timestamp:
                new Date().toISOString()


        };






        const updatedMessages=[

            ...get().messages,

            userMessage

        ];






        set({


            sending:true,


            typing:true,


            messages:updatedMessages


        });



        localStorage.setItem(

            "prism_copilot_messages",

            JSON.stringify(
                updatedMessages
            )

        );







        try{


            const response =
                await sendMessage(
                    message
                );





            const finalMessages=[

                ...get().messages,

                response

            ];






            set({


                messages:finalMessages


            });






            localStorage.setItem(

                "prism_copilot_messages",

                JSON.stringify(
                    finalMessages
                )

            );




        }
        catch(error){


            console.error(
                "Copilot response error:",
                error
            );



            set({

                error:error.message

            });


        }
        finally{


            set({


                sending:false,


                typing:false


            });


        }


    },








    clearChat:async()=>{


        try{


            await clearCopilotConversation();



        }
        catch(error){


            console.error(error);


        }




        localStorage.removeItem(

            "prism_copilot_messages"

        );




        set({


            messages:[]

        });


    },








    refreshInsights:async()=>{


        const data =
            await getCopilotData();



        set({

            copilotData:data

        });


    }



}));



export default useCopilotStore;