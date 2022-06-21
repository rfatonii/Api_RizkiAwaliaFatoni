// CLUB DUNIA
async function myFunction(){
  let result = await fetch
  (' https://api-football-standings.azharimm.site/leagues')
  .then(res => res.json())
  // .then(json => console.log(json.data,{}))
  .then(json =>{
const result = json.data;
let data = ''
for(i = 0; i < result.length; i++){
  data = data + `<div class="col-md-3 p-1">
  <div class="card">
      <img src="${result[i].logos.light}" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <a href ="club.html" class="card-text link-title">${result[i].name}</a>
      </div>
    </div>
    </div>`
}
document.getElementById('nama').innerHTML=data;
  })

}
myFunction();