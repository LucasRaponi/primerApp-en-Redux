import React from "react"
import { connect } from "react-redux"




const GraphicDesigner = ({graphicdesigner, quitarGraphicDesigner}) => (
    <section>

    <h2> Graphic Designer </h2>
    <div className="ContainerDevs" >
    {

            graphicdesigner.map(d => (

            <article className="Graphic" key={d.id}>

                    <div>
            

            <img src={d.foto} alt={d.nombre}/>
            <h3> {d.nombre} </h3>                                                 
            <button onClick={() => quitarGraphicDesigner(d)}>X</button>
                           

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
    graphicdesigner: state.graphicdesigner
})

const mapDispatchToProps = dispatch =>({

    quitarGraphicDesigner(dev) {
        dispatch ({
            type: "QUITAR_GRAPHICDESIGNER",
            dev
        })
    }

})



export default connect(mapStateProps, mapDispatchToProps)(GraphicDesigner)