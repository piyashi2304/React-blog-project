import { useContext } from "react"
import {Store} from "./StoreCompo"
import { Link } from 'react-router-dom'
function Hollywood(){
        const [data] = useContext(Store)
        console.log(data)
        return(
            <div className="grand">
        
            <div>
            
            <h1>Hollywood</h1>
            
            
            {data.filter((data) => data.cat==="Hollywood").map((item,index) =>{
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
            
            
            {data.filter((data) => data.cat==="Hollywood").map((item,index) =>{
                // console.log(item)
                if(item.id>=32 && item.id<=35)
            
                return(
                    
                    <div className="rightparent" key={index}>
                    <Link to = {`/details/${item.id}`}>
                    
                    <img src={item.img} alt="not found" width={"450"} height={"140"}  />
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
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2IZ1Yku50b-BiARKwl-stItuYHtPXy8haGMIlgGbhdGl1PLbTHR0N51y3JOP0vkQANI&usqp=CAU" width={"450"} height={"695"}/> 
            </div>
            </div>
        )
    
}
export default Hollywood