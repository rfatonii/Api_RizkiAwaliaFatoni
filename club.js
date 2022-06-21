// DAFTAR CLUB
async function clubFunction(){
    let club = await fetch
    ('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
    .then(response => response.json())
    // .then((json)=>console.log(json))
    .then(json => {
        const result = json.teams;
        // console.log(result.teams);
        let data = "";
        for(i=0; i< result.length; i++){
            data = data + 
            `<div class="col-md-4 mt-2"><a href="#" class="text-decoration-none text-black"><div class="card"><div class="row"><div class="col-md-1"><img src="${result[i].strTeamBadge}" style="width:60px" class="card-img-top p-1" alt="..."></div><div class="col-md-10">
            <p class="mt-3 text-center" style="font-size: 27px;">${result[i].strTeam}</p></div></div></div></a></div>`
        }
        document.getElementById('teams').innerHTML = data;
    })
  }

  clubFunction();