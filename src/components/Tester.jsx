import React from "react"
import { connect } from "react-redux"




const Tester = ({tester, quitarTester}) => (
    <section>

    <h2> Tester </h2>
    <div className="ContainerDevs" >
    {

            tester.map(d => (

            <article className="Tester" key={d.id}>

                        <div>
            

            <img src={d.foto} alt={d.nombre}/>
            <h3> {d.nombre} </h3>                                                 
            <button onClick={() => quitarTester(d)}>X</button>
                           

                        </div>
            



            </article>
)
)
}
</div>
</section>
)





const mapStateProps = state => ({
    tester: state.tester
})

const mapDispatchToProps = dispatch =>({

    quitarTester(dev) {


        
        dispatch({
            type: "QUITAR_TESTER",
            dev
        })
    }
    
    
    

})



export default connect(mapStateProps, mapDispatchToProps)(Tester)