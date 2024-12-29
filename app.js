import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=> {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"/>
            </div>
            <div className="nav-items">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>

                </ul>

            </div>

        </div>
    )

}



const RestuarantCard =()=>{
    return(
        <div className="res-card">
            <img  className="img-logo"  alt="logo-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"/>
             <h3>Meghana Foods</h3>
             <h4>Biriyani, North Indian, Asian</h4>
             <h4>4.4 stars </h4>    
             <h4>38 minutes</h4>
           
        </div>
        


    

        

    );
};




const Body =()=>{
    return(
         <div className="body">
            <div className="search">
            <input type="text" placeholder="Search"/>
            </div>
            <div className="res-container">
                <RestuarantCard/>
                <RestuarantCard/>
                <RestuarantCard/>
                <RestuarantCard/>
                <RestuarantCard/>
                <RestuarantCard/>
                <RestuarantCard/>
                




            </div>

           

         </div>


    );
};









const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
       )

};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (<AppLayout/>)




                       