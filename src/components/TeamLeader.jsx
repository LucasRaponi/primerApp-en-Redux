import React from "react"
import { connect } from "react-redux"




const TeamLeader = ({teamleader, quitarTeamLeader}) => (
    <section>

    <h2> Team Leader </h2>
    <div className="ContainerDevs" >
    {

                teamleader.map(d => (

            <article className="TeamLeader" key={d.id}>

                        <div>
            

            <img src={d.foto} alt={d.nombre}/>
            <h3> {d.nombre} </h3>                                                 
            <button onClick={() => quitarTeamLeader(d)}>X</button>
                           

                        </div>



            </article>
)
)
}
</div>
</section>
);





const mapStateProps = state => ({
    teamleader: state.teamleader
})

const mapDispatchToProps = dispatch =>({

    quitarTeamLeader(dev)  {
        
            dispatch ({
                type: "QUITAR_TEAMLEADER",
                dev
            })
        }
    
    })





export default connect(mapStateProps, mapDispatchToProps)(TeamLeader)