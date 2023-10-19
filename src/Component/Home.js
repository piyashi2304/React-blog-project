import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom";

function Home(){
    const [data] = useContext(Store);
    // console.log(data)
    return(
        <>
        <h1>Home</h1>
        <div className="image-home">
            <img className="image1" src="https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=" />
            <img className="image2" src="https://assets.website-files.com/62311413466139dfed65b237/62e2db292064333f5102a3bf_Artboard%201%20copy-100.jpg" />
            <img className="image3" src="https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68=" />
       </div>
       <h4>The Latest</h4>
       <div className="container-home">
        
       {data.filter((data) => data.cat==="Home").map((item,index) =>{
                // console.log(item)
                if(item.id>=4 && item.id<=6)
            
                return(
                    <>
                    
                    <div className=" parent-home" key={index}>
                    <Link to = {`/details/${item.id}`}>
                    
                    <img src={item.img} alt="not found" width={"390"} height={"140"}  />
                    </Link>
                     <div className="child">
                    <h2>{item.title}</h2>
                    <p>{item.cont.slice(0,70)}</p>
                    <p>{item.cat}</p>
                    
                    </div> 
                </div>
                   
                    </>
                )
             })}  
       </div>
        </>
    )
}
export default Home