import './App.css';
import CompHeader from './components/ComHeader';
import CompContenTimers from './components/CompContenTimers';
import CompTimer from './components/CompTimer';
import CompNewTimer from './components/CompNewTimer';
import CompModal from './components/ComModal'
import {useEffect, useLayoutEffect, useMemo, useState} from 'react';




function App() {

  
const [users, setUsers] = useState([]);
const [s,S] = useState([]);
const [cliname, setcliname] = useState();
const [edad, setedad] = useState();
// const [Timers, setTimers] = useState({});


const GETCli = async() =>{
  const v = await fetch("http://localhost:3000/api/clients/").then((r)=>r.json());  
  setUsers([...v]);
}
const POSTCli =  async(n,e) =>{
  await fetch("http://localhost:3000/api/clients/",{
        method: "POST",
        body: JSON.stringify({name:n,edad:e}),
        mode:"cors",
   
        headers:{
            'Accept':'application/json',
            'Content-Type' : 'application/json'
        }
    })
}






useEffect( () => {
  GETCli();
  console.log(users[0].name);
},[]);



const getRandom = () =>{
  return parseInt(Math.random()*10000);
}

const addTimer =() =>{

  S([getRandom(),...s]);
}
const removeTimer = (j) =>{
  S(
    s.fill((c) => c != j)
  );
}
const [getmodal, setmodal] = useState(false);
const [getmodal1, setmodal1] = useState(false);        

  return (

    
    <>
    
      <CompHeader titulo="MultiTimers">
        <button className="new-client" onClick={e=>setmodal(true)} >Nuevo Cliente</button>
        <button className="new-client" onClick={e=>setmodal1(true)} >Historial</button>
      </CompHeader>
      <CompContenTimers>
        
        {
          s.map((s,i)=>(<CompTimer key={s} k={s} users={users} del={removeTimer}/>))
        }
        <CompNewTimer onClick={addTimer}/>
      </CompContenTimers>
      <CompModal titulo="Nuevo Usuario" modal={[getmodal,setmodal]}>
          <input type="text" placeholder="Nombre" value={cliname} onChange={e=>setcliname(e.target.value)}/>
          <input setUserse="text" placeholder="Edad" value={edad} onChange={e=>setedad(e.target.value)}/>
          <input type="button" value="Registrar" className="pointer" onClick={e=>POSTCli(cliname, parseInt(edad))}/>
      </CompModal>  
      <CompModal titulo="Buscar Registro" modal={[getmodal1,setmodal1]}>
          <div className="row buscar">
              <input type="text" placeholder="Buscar"/>
              <input type="button" value="Buscar" className="pointer"/>
          </div>
          
          
      </CompModal>  
    </>
  );
}

export default App;
