//Selecciono los elementos del DOM que vamos a usar
const nombreInput = document.getElementById("nombre")
const apPatInput = document.getElementById("apPat")
const apMatInput = document.getElementById("apMat")
const edadInput = document.getElementById("edad")
const grupoInput = document.getElementById("grupo")
const materia1Input = document.getElementById("materia1")
const calificacion1Input = document.getElementById("calificacion1")
const materia2Input = document.getElementById("materia2")
const calificacion2Input = document.getElementById("calificacion2")
const materia3Input = document.getElementById("materia3")
const calificacion3Input = document.getElementById("calificacion3")

const form = document.getElementById("formularioUsuario")
const borrarBoton = document.getElementById("borrarStorage")
const infoUsuario = document.getElementById("infoUsuario")
const mensaje = document.getElementById("mensaje")
let inscritos=[]; // se crea arreglo inscritos
function registrarUsuario(event) {
    event.preventDefault() //Previene el comportamiento por defecto del evento "SUBMIT"

    //Obtener los valores de los inputs
    const nombre = nombreInput.value
    const apPat = apPatInput.value
    const apMat = apMatInput.value
    const edad = edadInput.value
    const grupo = grupoInput.value
    const materia1 = materia1Input.value
    const calificacion1 = calificacion1Input.value
    const materia2 = materia2Input.value
    const calificacion2 = calificacion2Input.value
    const materia3 = materia3Input.value
    const calificacion3 = calificacion3Input.value


    class Alumno{
        constructor(nombre, apPat, apMat, edad, grupo, materia1, calificacion1, materia2, calificacion2, materia3, calificacion3){
            this.nombre=nombre;
            this.apPat= apPat;
            this.apMat= apMat;
            this.edad= edad;
            this.grupo= grupo;
            //materias y calificacion1es (3 materias)
            this.materia1= materia1;
            this.calificacion1= calificacion1;
            this.materia2= materia2;
            this.calificacion2= calificacion2;
            this.materia3= materia3;
            this.calificacion3= calificacion3;
        }     
    }
    

    //Instancia de clase Alumno
    const usuario= new Alumno(nombre, apPat, apMat, edad, grupo, materia1, calificacion1, materia2, calificacion2, materia3, calificacion3 )
   // desplegarInfoUsuario()
     inscritos.push(usuario) 
     console.log(inscritos)   
     //Guarda el arreglo inscritos en localStorege
     localStorage.setItem("inscritos", JSON.stringify(inscritos))
    desplegarTodosUsuarios()

    //Guardar el objeto en localStorage como una cadena JSON
    //localStorage.setItem("usuario", JSON.stringify(usuario))     temporal

    //Limpiar los campos de entrada
    nombreInput.value = ""
    apPatInput.value = ""
    apMatInput.value = ""
    edadInput.value = ""
    grupoInput.value = ""
    materia1Input.value = ""
    calificacion1Input.value = ""
    materia2Input.value = ""
    calificacion2Input.value = ""
    materia3Input.value = ""
    calificacion3Input.value = ""
    

}

    //Mostrar la información actualizada
    //desplegarInfoUsuario()

 /* function borrarLocal() {
   //Limpiar el localStorage
    localStorage.removeItem("inscritos")

    //Actualizar la información mostrada
    //desplegarInfoUsuario()
    
    desplegarTodosUsuarios()
 }
  */
  /*  function desplegarInfoUsuario() {
    //Obtener la infomación del usario del localStorage
      //const usuario = localStorage.getItem("usuario")//La información está almacenada en un formato llamado JSON

    //Si hay información del usuario, mostrarla
    if(inscritos.length!==0){
        objetoUsuario= inscritos[inscritos.length-1]
       // const objetoUsuario = JSON.parse(usuario)
        infoUsuario.textContent = `Nombre: ${objetoUsuario.nombre},    Apellido Paterno: ${objetoUsuario.apPat},   Apellido Materno: ${objetoUsuario.apMat},   Edad, ${objetoUsuario.edad},  Grupo: ${objetoUsuario.grupo},   Materia1: ${objetoUsuario.materia1},   Calificacion1: ${objetoUsuario.calificacion1}, Materia2: ${objetoUsuario.materia2},   Calificacion2: ${objetoUsuario.calificacion2}, Materia3: ${objetoUsuario.materia3},   Calificacion3: ${objetoUsuario.calificacion3}`
         
      }else{
         infoUsuario.textContent = "No hay información registrada del usuario"
     }
}
   */

    

 //mostrar todos los inscritos
     function desplegarTodosUsuarios( ){
      //Obtener la infomación del usario del localStorage
      const b= localStorage.getItem("inscritos")//La información está almacenada en un formato llamado JSON
        console.log(b)
     //Si hay información del usuario, mostrarla
     if(b){
         const objetoUsuario = JSON.parse(localStorage.getItem("inscritos"))
               
           console.log(objetoUsuario)
            let lista=""
          
           for (let i =0 ; i < objetoUsuario.length; i++) {
            const elemento = objetoUsuario[i];
           
           lista +=  " DATOS, GRUPO Y MATERIAS :" + ` ${i+1}.- Nombre: ${elemento.nombre},   Apellido Paterno: ${elemento.apPat},   Apellido Materno: ${elemento.apMat},   Edad, ${elemento.edad},  Grupo: ${elemento.grupo}, 
             Materia1: ${elemento.materia1},   Calificacion1: ${elemento.calificacion1},
            Materia2: ${elemento.materia2},   Calificacion2: ${elemento.calificacion2}, 
            Materia3: ${elemento.materia3},   Calificacion3: ${elemento.calificacion3} `
           
                    
           }
           mensaje.textContent= lista 
        
              }else{
         mensaje.textContent = "No hay información registrada del usuario"
     
    
              }     
}
//desplegarInfoUsuario()

     

form.addEventListener("submit", registrarUsuario)

 //borrarBoton.addEventListener("click", borrarLocal)
 