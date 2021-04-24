
const ButtonContainer =({buttonList,handleOnclick,btnName,isbtnListLoad})=>{
    return (
        <div className="wrapper">
            <div className="title">Chuck Norries</div>
            <div className="buttonContainer">
                {
                     isbtnListLoad ? (<div style={{textAlign:'center', color:'red'}}>Loading...</div>) : ( 
                            buttonList?.map((btnLabel)=>{
                               return(
                                    <label 
                                        className={`${btnName === btnLabel  && 'activeBTN'} btn`}
                                        key={btnLabel}
                                        onClick={handleOnclick}
                                    >
                                        {btnLabel}
                                    </label>
                              )
                            })
                        )
                }
            </div>
        </div>
    )
}
export default ButtonContainer;