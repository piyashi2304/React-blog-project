import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"

function Fitness(){
    const [data] = useContext(Store)
    console.log(data)
    return(
        <div className="grand">
    
        <div>
        
        <h1>Fitness</h1>
        
        
        {data.filter((data) => data.cat==="Fitness").map((item,index) =>{
            console.log(item)
        
            return(
                <>
                
                <div className="parent" key={index}>
                <Link to = {`/details/${item.id}`}>
                
                <img src={item.img} alt="not found" width={"200"} height={"140"}  />
                </Link>
                <div className="child">
                <h2>{item.title}</h2>
                <p>{item.cont.slice(0,70)}</p>
                <p>{item.cat}</p>
                
                </div>
                
                </div>
                <hr />
                </>
                
                
                
            )
         })} 
        </div>
        <div>
        
        <h1>Top most</h1>
        
        
        {data.filter((data) => data.cat==="Fitness").map((item,index) =>{
            // console.log(item)
            if(item.id>=42 && item.id<=45)
        
            return(
                
                <div className="rightparent" key={index}>
                <Link to = {`/details/${item.id}`}>
                
                <img src={item.img} alt="not found" width={"350"} height={"140"}  />
                </Link>
                 <div className="rightchild">
                <h2>{item.title}</h2>
                <p>{item.cat}</p>
                <h2>{index}</h2>
                
                </div> 
                
                
                </div>
                
                
                
                
            )
         })} 
         <h1>Advertisement</h1>
         <img src="https://i.pinimg.com/originals/71/26/98/712698d6b05895dcb3a3a5f16bf35815.png" width={"480"} height={"695"}/>
        </div>
        </div>
    )

}
export default Fitness
