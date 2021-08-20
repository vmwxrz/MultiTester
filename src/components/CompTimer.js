import React,{useState,useEffect} from 'react';
import hook from '../hooks/HookTimer'

export default Headers = ({users = Array,del,k}) =>{
    const [state, setstate] = useState({nClass:"start",nImg:"play"});
    
    const {H,M,S,setH,setM,setS,play,pausa,getTime,reset:resett,sum} = hook();

    useEffect(() => {
        if (!sum()){
            reset();
        }
    }, [H,M,S])



    
    const altern = () =>{
        if (getTime() == 0) {
            setstate({nClass:"start",nImg:"play"});
        }else{
            if (state.nImg != "play") {
                setstate({nClass:"play",nImg:"play"});
                pausa();
            }else{
                setstate({nClass:"pausa",nImg:"pausa"});
                play();
            }
        }
    }

    const reset = () =>{
        setstate({nClass:"start",nImg:"play"});
        resett();
        // setTime(0);
    }

        return(
            <div className="timer">
                
                <div className="row" style={{height: 30, marginTop: 5, justifyContent: "space-between"}}>
                    <select style={{width:"80%"}}>
                    <option>Cliente</option>        

                        {
                            users.map((m,i)=>(
                                <option key={`op${i}`}>{m.name}</option>        
                            ))
                        }
                    </select>
                    <div className="delete-time" onClick={e=>del(k)}>
                        <p  title="Eliminar Timer">x</p>
                    </div>
                </div>
                <div className="marcador" >
                    <input type="text" value={H} onChange={setH}/>
                    <input type="text" value={M} onChange={setM}/>
                    <input type="text" value={S} onChange={setS}/>
                </div>
                <div className="controlls" >
                    <button onClick={(e)=>{reset()}}><img src="./img/retorno.png"/></button>
                    <button onClick={(e)=>{altern()}} className={state.nClass}><img src={`./img/${state.nImg}.png`}/></button>
                </div>
            </div>
        );
}