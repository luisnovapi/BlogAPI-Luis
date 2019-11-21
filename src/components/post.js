import Route from '../libs/route';
import moment from 'moment'

var postTemplate = `

  <div class="card card border-info mb-3 " style="margin-top: 15px">
  <div class="card-header card border-active mb-3">
    <h5 class="card-title"><span  title="icon name" aria-hidden="true" style='color: blue'><strong>{{TITLE}}</strong></span></h5>
    </div>
<div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted" ><i style= 'color: black'>by:</i> {{NAME}} - {{EMAIL}}<span class="justify-content-start" "style='color: #C0C0C0'> {{DATE}}</span></h6>
    <p class="card-text"style = "font-family:Copperplate"><span style='color: black'><i>{{BODY}}</i></span></p>

  </div>
</div>
`

class Post extends Route {

    constructor(){
        super('post', { htmlName : '/views/post.html', default : true });
        this.onMountCb = this.whenMounted
    }

    clickBtn3(){
        console.log("Trying btn1 on post route")
    }

   async whenMounted(){
        document.getElementById('btn1').addEventListener('click', () =>  this.clickBtn3());

        document.getElementById('posts').innerHTML = '<div class="spinner-border text-primary" role="status"> <span class="sr-only"><h1>Actualizando Publicaciones para mostrar...</h1></span></span>'

        var posts = await blogapi.getPosts();
        var sp = '';

        posts.forEach(p => {
            sp+= postTemplate.replace('{{TITLE}}', p.title)
            .replace('{{BODY}}', p.body)
            .replace('{{NAME}}', p.userName)
            .replace('{{EMAIL}}', p.userEmail)
            .replace('{{DATE}}', moment(p.createdAt).format('DD/MM/YYYY h:mm:ss a'))
        });

        document.getElementById('posts').innerHTML = sp
    }
}

var post = new Post();
export default post;