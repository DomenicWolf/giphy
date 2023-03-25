console.log("Let's get this party started!");

async function getGif(name){
    //const test = ;
    //console.log(test)
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search`,{params:{q:name,api_key:'UrRqpO9ZW2QgVgUkn4sHpZxUPsE6IO9Y',limit:1}});
    //const img = document.querySelector('#img');
    console.log(res)
    //console.log(res.data.data[0].images.original.url)
    let test = res.data.data[0].images.original.url;
    let img = document.createElement('img');
    img.setAttribute('src',test)
    let div = document.querySelector('#img')
    img.classList.add('box')
    div.append(img);


}
let $remove = $('#remove');
let $removeSec = $('#img')
$remove.on('click',function(){
   // e.preventDefault();
    $removeSec.empty()
})

const form = document.querySelector('#form');
const btn = document.querySelector('#input');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.log(btn.value)
    try{
        await getGif(btn.value);
    }catch(e){
        console.log(e)
    }
    btn.value='';
})

let test = 0