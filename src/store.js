import { createStore } from "redux"


const initialState = {
    devs: [{

        id: 1 ,
        nombre: "Gerchu" ,
        foto: "https://pbs.twimg.com/profile_images/1242175463210057729/ALcz5d2s_400x400.jpg" ,
     },
    
     {

        id: 2 ,
        nombre: "Mariano" ,
        foto: "https://medias.fashionnetwork.com/image/upload/v1/medias/ab4a10f7679ea2c38819c8c900904f2b2943745.jpg" ,
     },

     {

        id: 3 ,
        nombre: "Eugenia" ,
        foto: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg" ,
     },

     {

        id: 4 ,
        nombre: "Milagros" ,
        foto: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Amalia_Granata.png" ,
     },

     {

        id: 5 ,
        nombre: "Damian" ,
        foto: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/aa60baf3-d6f0-41b1-a5e5-a69dc2e08d66/36cc863c-6dd3-4ae6-87fb-21fb56281e8a/1280x720/match/image.jpg" ,
     },

     
    

    
    ],

    /* Aca van todas las variables de los componentes*/
    
    front: [],
    back: [],
    tester: [],
    graphicdesigner: [],
    teamleader: [],
    


}


/* si el identificador de la accion es "AGREGAR_FRONT" entonces devuelve la state tal cual esta
pero en front va a devolverte la state concatenada con el "dev" que es el objeto creado en el
dispatch
osea que cuando des click en el boton, este ejecuta el evento que contiene una funcion que selecciona
al dev creado anteriormente
luego este dev es pasado a objeto (osea todas las propiedades que tiene) y a su vez es una action
que se concatena al componente que que hayas seleccionado */
const reducerReacTeam = (state=initialState, action) => {
   switch (action.type) {


      case "AGREGAR_FRONT": 
         return {
         ...state,
         front: state.front.concat(action.dev),
         devs: state.devs.filter(d => d.id !== action.dev.id)
      }

      case "QUITAR_FRONT":
         return {
            ...state,
            front: state.front.filter(d => d.id !== action.dev.id),
            devs: state.devs.concat(action.dev),
        }

       case "AGREGAR_BACK":
         return {
      ...state,
      back: state.back.concat(action.dev),
      devs: state.devs.filter(d => d.id !== action.dev.id) 
  }

      case "QUITAR_BACK":
         return {
      ...state,
      back: state.back.filter(d => d.id !== action.dev.id),
      devs: state.devs.concat(action.dev),
  }



case "AGREGAR_GRAPHICDESIGNER":
   return {
      ...state,
      graphicdesigner: state.graphicdesigner.concat(action.dev),
      devs: state.devs.filter(d => d.id !== action.dev.id) 
  }

case "QUITAR_GRAPHICDESIGNER":
   return {
      ...state,
      graphicdesigner: state.graphicdesigner.filter(d => d.id !== action.dev.id),
      devs: state.devs.concat(action.dev),
  }


case "AGREGAR_TEAMLEADER":
   return {
      ...state,
      teamleader: state.teamleader.concat(action.dev),
      devs: state.devs.filter(d => d.id !== action.dev.id) 
  }


case "QUITAR_TEAMLEADER":
   return {
      ...state,
      teamleader: state.teamleader.filter(d => d.id !== action.dev.id),
      devs: state.devs.concat(action.dev),
  }


case "AGREGAR_TESTER":
   return {
      ...state,
      tester: state.tester.concat(action.dev),
      devs: state.devs.filter(d => d.id !== action.dev.id) 
  }


case "QUITAR_TESTER":
   return {
      ...state,
      tester: state.tester.filter(d => d.id !== action.dev.id),
      devs: state.devs.concat(action.dev),
  }

   default:
    return state

}}



 

export default createStore(reducerReacTeam)