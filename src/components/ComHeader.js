import React from 'react';

export default Headers = ({titulo,children}) =>{
        return(
            <header className="row">
                <h1>{titulo}</h1>
                {children}
                
            </header>
        );
}