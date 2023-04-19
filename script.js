let bd = [
    {
        email: "mcocuy@mail.com",
        password: "compaq",
        username: "striker",
        active: true
    },
    {
        email: "CRocuy@mail.com",
        password: "compaq2",
        username: "carlosReact",
        active: true
    },
    {
        email: "DB@mail.com",
        password: "compaq1",
        username: "danielaButstrap",
        active: false
    },

];


function checkLogin(){
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    for(usuario of bd){
        if((usuario.email === username || usuario.username === username) && usuario.password === password && usuario.active){
            return true
        }
    }
    return false;
    // let encuentraUsuario = bd.find(function(usuario){
    //     return (usuario.email === username || usuario.username === username) && usuario.password === password && usuario.active;
    // })
    // console.log(encuentraUsuario);
    // if(encuentraUsuario !== undefined){
    //     alert("Inicio de sesion correcto")
    // }else{
    //     alert("El usuario no existe o no está activado")
    // }
}

function attemptLogin(){
    if(checkLogin()){
        alert("Inicio de sesion correcto");
    }else{
        alert("El usuario no existe o no está activado");
    }
}
function viewPass(){
    let type = document.querySelector("#password").type
    if (type === "password"){
        document.querySelector("#password").type = "text"
    }else{
        document.querySelector("#password").type = "password"
    }

}