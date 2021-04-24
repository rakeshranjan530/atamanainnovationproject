const JokeContainer =({joke,isJokeLoad,handleNewJoke,categories,newJoke})=>{
    return(
        <div className="wrapper">
            <div className="jokebox">
                <h5 style={{textAlign:"center"}}>Selected Category : {categories}</h5>
               <div className="jokecontainer bg-primary text-center text-white p-4">
                {
                       isJokeLoad ? (<div>Loading Joke...</div>) : (
                            <h4>{joke}</h4>
                           )
                   }
                </div>
                {
                    newJoke && (
                        <div>
                            <label style={{color:"#007bff",marginTop:"15px",cursor:"pointer"}} onClick={handleNewJoke} >New Joke</label>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}
export default JokeContainer;