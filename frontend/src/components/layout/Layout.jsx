// src/components/layout/Layout.jsx


import Sidebar from "./SideBar";



import Header

from "./Header";






function Layout({children}){



    return (



        <div className="app-layout">





            <Sidebar />







            <div className="main-area">





                <Header />







                <main className="content-area">


                    {children}


                </main>







            </div>







        </div>



    );


}



export default Layout;