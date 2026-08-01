import apiClient from "./apiClient";





// Get complete Copilot dashboard data

export const getCopilotData = async()=>{


    const response = await apiClient.get(
        "/copilot"
    );


    return response.data;

};







// Send message to AI Copilot

export const sendMessage = async(message)=>{


    const response = await apiClient.post(

        "/copilot/chat",

        {

            message

        }

    );


    return response.data;

};







// Get AI status

export const getCopilotStatus = async()=>{


    const response = await apiClient.get(

        "/copilot/status"

    );


    return response.data;

};







// Get AI generated insights

export const getCopilotInsights = async()=>{


    const response = await apiClient.get(

        "/copilot/insights"

    );


    return response.data;

};







// Clear conversation

export const clearCopilotConversation = async()=>{


    const response = await apiClient.delete(

        "/copilot/conversation"

    );


    return response.data;

};