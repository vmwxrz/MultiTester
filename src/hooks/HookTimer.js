import {useState,useEffect,use} from 'react';

export default ()=>{
    // const [Time, setTime] = useState(0);
    let time = 0;
    const [count, setcount] = useState(null);
    const [H, onH] = useState(0);
    const [M, onM] = useState(0);
    const [S, onS] = useState(0);
    
    
    const reset = ()  =>{
        onH(0);
        onM(0);
        onS(0);
        time = 0;
        pausa();
    }
    
    const sum = () =>{
        return M + S +H;
    }

    const decrementTime = () =>{
        time--;
    }

    const getTime =() =>{
         time =  parseInt((H * 3600) + (M * 60) + S);
        return time;
    }


    const setH = (e) =>{
        onH(e.target.value);
    }
    const setM = (e) =>{
        onM(e.target.value);
    }
    const setS = (e) =>{
        onS(e.target.value);
    }
    
    const upDate = () => {
        onS(parseInt(time%60));
        onM(parseInt((time/60)%60));
        onH(parseInt(time/3600));
    }


    const play= () =>{
        getTime();
        if(!count){
            setcount(setInterval(() => {
                
                if(time != 0){
                    decrementTime();
                    upDate();
                }else{
                    pausa();
                }
            }, 1000));
        }
    }
    const pausa = () =>{
        if(count){
            clearInterval(count);
        }
        setcount(null);
    }
    


    return{
        reset,
        getTime,
        play,
        pausa,
        setH,
        setM,
        setS,

        H,
        M,
        S,
        sum
    }


}