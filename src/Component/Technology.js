import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"
function Technology(){
    const [data] = useContext(Store)
    console.log(data)
    return(
        <div className="grand">
    
        <div>
        
        <h1>Technology</h1>
        
        
        {data.filter((data) => data.cat==="Technology").map((item,index) =>{
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
        
        
        {data.filter((data) => data.cat==="Technology").map((item,index) =>{
            // console.log(item)
            if(item.id>=26 && item.id<=29)
        
            return(
                
                <div className="rightparent" key={index}>
                <Link to = {`/details/${item.id}`}>
                
                <img src={item.img} alt="not found" width={"300"} height={"120"}  />
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
         <img src="https://www.investopedia.com/thmb/tFHjCFL9uLlgj5_yQ6xt6WzH7iQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/social-media-final-8f48359ac9e7486eaf40932f4a9e2597.png" width={"450"} height={"775"}/>
        </div>
        </div>
    )
}
export default Technology