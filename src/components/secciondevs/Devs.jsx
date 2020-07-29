import React from "react"
import { connect } from "react-redux" 



const Devs = ({ devs, agregarFront, agregarBack, agregarTester, agregarGraphicDesigner, agregarTeamLeader }) => (
    <section>
        <h2>
            Developers
        </h2>

    <div className="ContainerDevs">
            {
                devs.map(d =>( /* esto le indica que por cada dev que hay en la store cree 
                                        un elemento para todos y les vaya asignando las propiedades
                                        desde la store */
                    <article className="developers" key={d.id}>
                        <img src={d.foto} alt={d.nombre} img/> 
                        <h3> {d.nombre} </h3>
                        <div> 
                            <button onClick={() => agregarFront(d)}>Front</button> 
                            <button onClick={() => agregarBack(d)}>Back</button>
                            <button onClick={() => agregarTester(d)}>Tester</button>
                            <button onClick={() => agregarGraphicDesigner(d)}>Graphic Designer</button>
                            <button onClick={() => agregarTeamLeader(d)}>Team Leader</button>

                        </div>
                        </article>

                ))
            }

    </div>

    </section>
)

/* en el evento onClick agregarFront toma el parametro "d" que es el dev creado anteriormente en el mapeo:
 devs.map(d => ........ 
    y luego convierte todas las props de este dev en un objeto == ese objeto se llama "dev" */




const mapStateProps = state => ({
    devs: state.devs
})

const mapDispatchToProps = dispatch =>({

    agregarFront(dev) /* "dev" es el objeto creado */ {


        /* el objeto que crea el dispatch es un action  */
        dispatch({
            type: "AGREGAR_FRONT",
            dev
        })
    },
    agregarBack(dev) {
        dispatch ({
            type: "AGREGAR_BACK",
            dev
        })
    },
    
    agregarGraphicDesigner(dev) {
        dispatch ({
            type:"AGREGAR_GRAPHICDESIGNER",
            dev

        })
    },

    agregarTester(dev) {
        dispatch ({
            type:"AGREGAR_TESTER",
            dev
        })
    },

    agregarTeamLeader(dev) {
        dispatch ({
            type: "AGREGAR_TEAMLEADER",
            dev
        })
    }





})

export default connect(mapStateProps, mapDispatchToProps) (Devs) /* "Developers" es la palabra reservada que use
para la variable que contiene las propiedades de los devs */


