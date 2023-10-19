import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"

function Bollywood() {
    let count = 0
    const [data] = useContext(Store)
    console.log(data)
    return (
        <div className="grand">

            <div style={{border:'1px solid black', width:'60%'}}>

                <h1>Bollywood</h1>


                {data.filter((data) => data.cat === "Bollywood").map((item, index) => {
                    console.log(item)

                    return (

                        <>
                            <div className="parent" key={index}>
                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" width={"200"} height={"140"} />
                                </Link>
                                <div className="child">
                                    <h2>{item.title}</h2>
                                    <p>{item.cont.slice(0, 70)}</p>
                                    <p>{item.cat}</p>
                                </div>

                            </div>
                            <hr />
                        </>





                    )
                })}
            </div>
            <div style={{border:'1px solid black',width:'40%'}}>

                <h1>Top most</h1>


                {data.filter((data) => data.cat === "Bollywood").map((item, index) => {
                    if (item.id == 12){
                        return (

                            <div className="rightparent1" key={index}>

                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" width={"60%"} height={"80"} />
                                </Link>
                                <div className="rightchild1">
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    <h2 className="number">{++count}</h2>

                                </div>



                            </div>
                        )
                    }else if( item.id > 12 &&item.id <= 16){
                        return (

                            <div className="rightparent" key={index}>

                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" width={"300"} height={"120"} />
                                </Link>
                                <div className="rightchild">
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    <h2>{++count}</h2>

                                </div>



                            </div>
                        )
                    }
                })}
                <h1>Advertisement</h1>
                <img src="https://www.theweek.in/content/dam/week/webworld/feature/society/2016/august/images/maggi-1.jpg.image.470.274.jpg" width={"450"} height={"590"} />
            </div>

        </div>
    )

}
export default Bollywood