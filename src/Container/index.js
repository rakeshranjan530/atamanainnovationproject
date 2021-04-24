import { useEffect, useState } from "react";
import './index.css'
import ButtonContainer from "../component/ButtonList";
import JokeContainer from "../component/joke";


const WrapperContainer =()=>{
    
    const [volatile, setVolatile] = useState({
        buttonList:[],
        joke:"No Joke",
        isActive:false,
        categories : '',
        btnName : '',
        isbtnListLoad : true,
        isJokeLoad:true,
    })

    useEffect(()=>{
        const fetchButtonApi = async () => {
            let isbtnListLoad = true;
            let btnData;
            try {
                const response = await fetch('https://api.chucknorris.io/jokes/categories');
                btnData = await response.json();
                isbtnListLoad = false;
            } catch (error) {
              console.log("btn list error", error);
              isbtnListLoad = false;
            }
            setVolatile((state)=>({
                ...state,
                buttonList:btnData,
                isbtnListLoad,
                isJokeLoad:false,
            }))
        }
       fetchButtonApi();
    },[])

    const getJoke = async (category) => {
        let isJokeLoad = true;
        let jokeData;
        try {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
            jokeData = await response.json();
            isJokeLoad = false;
        } catch (error) {
            console.log("Joke api error ->", error);
            isJokeLoad = false;
        }
       setVolatile((state)=>({
        ...state,
        joke:jokeData?.value,
        categories: jokeData?.categories,
        isJokeLoad,
    }))
    }
    const handleOnclick = (e) => {
     const labelName = e.target.innerText;
     let btnName = volatile?.btnName;
     btnName = labelName;
     getJoke(labelName)
     setVolatile((state)=>({
         ...state,
         btnName
     }))
    }
     const handleNewJoke =()=>{
        let category = volatile?.btnName;
        if(category){
            getJoke(category)
        }
     }

    return(
        <div>
            <ButtonContainer isbtnListLoad = {volatile?.isbtnListLoad} buttonList = {volatile.buttonList} handleOnclick={handleOnclick} btnName = {volatile?.btnName} />
            <JokeContainer newJoke = {volatile?.btnName} categories={volatile?.categories} joke = {volatile.joke} isJokeLoad={volatile?.isJokeLoad} handleNewJoke={handleNewJoke}/>
        </div> 
    )
}
export default WrapperContainer;