
import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"

function Food(){
    const [data] = useContext(Store)
    console.log(data)
    return(
        <div className="grand">
    
        <div>
        
        <h1>Food</h1>
        
        
        {data.filter((data) => data.cat==="Food").map((item,index) =>{
            // console.log(item)
            
        
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
        
        
        {data.filter((data) => data.cat==="Food").map((item,index) =>{
            // console.log(item)
            if(item.id>=51 && item.id<=55)
        
            return(
                <>
                
                <div className="rightparent" key={index}>
                <Link to = {`/details/${item.id}`}>
                
                <img src={item.img} alt="not found" width={"300"} height={"100"}  />
                </Link>
                 <div className="rightchild">
                <h2>{item.title}</h2>
                <p>{item.cat}</p>
                <h2>{index}</h2>
                
                </div> 
                
                
                </div>
                
                </>
                
                
                
                
            )
         })} 
         <h1>Advertisement</h1>
         <img src="https://img.freepik.com/free-vector/flat-design-food-facebook-ad_23-2149167379.jpg" width={"470"} height={"625"} />
        </div>
        </div>
    )

}
export default Food