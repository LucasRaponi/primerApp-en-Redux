import React from "react"
import { connect } from "react-redux"




const Front = ({front, quitarFront}) => (
    <section>

    <h2> Front </h2>
    <div className="ContainerDevs">
    {

            front.map(d => (

            <article className="Frontend" key={d.id}>
                <div>
            

            <img src={d.foto} alt={d.nombre}/>
            <h3> {d.nombre} </h3>                                                 
            <button onClick={() => quitarFront(d)}>X</button>
                           

                        </div>
            



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
    front: state.front
})

const mapDispatchToProps = dispatch =>({

    
    quitarFront(dev) {
        dispatch ({
            type: "QUITAR_FRONT",
            dev
        })
    },
    
    


})



export default connect(mapStateProps, mapDispatchToProps)(Front)