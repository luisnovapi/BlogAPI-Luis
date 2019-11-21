import Route from '../libs/route';
import moment from 'moment'

var profileTemplate = /**html*/
`

  <div class="card card border-info mb-3 " style="margin-top: 15px">
  <div class="card-header card border-active mb-3">
    <h5 class="card-title"><span  title="icon name" aria-hidden="true" style='color: black'>Nombre de Usuario: <strong>{{NAME}}</strong></span></h5>
    </div>
<div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted" ><i style= 'color: black'>Mi Email: </i>{{EMAIL}}<span class="justify-content-start" "style='color: #C0C0C0'> </span></h6>
    <p class="card-text"style = "font-family:Copperplate"><span style='color: black'>Se unió a Blog-API: <i>{{DATE}}</i></span></p>
    <button id="btnLogout" class="btn btn-flat btn-primary">Cerrar Sesión</button>
  </div>
</div>
`
class Profile extends Route {

    constructor(){
        super('profile', { content: '<h5>Loading page</h5>' })
        this.onMountCb = this.whenMounted
    }

   async logout(){

        var logout = await blogapi.logout();

        if (logout !== undefined){
            localStorage.removeItem('token');
            window.location.href = '/login.html';
        }
    }

    whenMounted(cb){

        // setTimeout(() => {
       var t = profileTemplate.replace('{{NAME}}', me.name)
        .replace('{{EMAIL}}', me.email)
        .replace('{{DATE}}', moment(me.createdAt).format('DD/MM/YYYY h:mm:ss a'));

        // set the html page
        cb(t);

        document.getElementById('btnLogout')
        .addEventListener('click', () => this.logout());
        // }, 3000);
    }
}

var profile = new Profile();
export default profile;