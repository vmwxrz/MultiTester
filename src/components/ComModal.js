import React, { useState } from 'react';

export default Headers = ({titulo,children,modal}) =>{

        

        return(
            <div  className="modal" style={{display: modal[0]?"flex":"none"}}>
                <div>
                    <div className="row" style={{justifyContent:"space-between",alignItems:"center"}}>
                        <h1>{titulo}</h1>   
                        <p className="pointer"style={{fontSize:"30px",fontWeigh:"bolder"}} title="Cerrar" onClick={(e)=> modal[1](false)}  >x</p>
                    </div>

                        {children}  
                    
                    
                </div>
            </div>
        );
}