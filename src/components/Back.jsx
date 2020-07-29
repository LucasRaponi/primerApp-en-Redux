import React from "react"
import { connect } from "react-redux"




const Back = ({back, quitarBack}) => (
    <section>

    <h2> Back </h2>
    <div className="ContainerDevs">
    {

        back.map(d => (

            <article className="backend" key={d.id}>

                        <div>
            

            <img src={d.foto} alt={d.nombre}/>
            <h3> {d.nombre} </h3>                                                 
            <button onClick={() => quitarBack(d)}>X</button>
                           

                        </div>
            
            <p>{d.nombre}</p>


            </article>
)
)
}
</div>
</section>
)



/* el map state props solicita con el "state.devs" el estado actual de las propiedades
que tenga cada dev en la store, asi que si algo cambia en la store se va a replicar este cambio
en todos sus componentes   */

const mapStateProps = state => ({
    back: state.back
})

const mapDispatchToProps = dispatch =>({

     quitarBack(dev) {


        
        dispatch({
            type: "QUITAR_BACK",
            dev
        })
    },
    
    

})



export default connect(mapStateProps, mapDispatchToProps)(Back)