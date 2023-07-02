let searchField = document.querySelector('.input')
let form = document.querySelector('form')
let target

form.addEventListener('submit', (e) => {
    e.preventDefault()

    target = searchField.value
    console.log(target)
    fetchData(target)
})

const fetchData = async () => {
    try {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${target}`

        const response= await fetch(url)
        const data = await response.json()
        console.log(data)
        update(data)

    } catch (error) {
        alert("Plz, Enter correct word ")
    }   
    

}

let mean = document.querySelector('.meaning span')
let synonym = document.querySelector('.synonym span')
let speech = document.querySelector('.partofspeech span')
function update(data){
    // console.log(data)
    mean.innerText =data[0].meanings[0].definitions[0].definition
    speech.innerText= data[0].meanings[0].partOfSpeech

    let syn= data[0].meanings[0].synonyms

    if(syn==""){

        synonym.innerText= "No synonym"
    }
    else{
        synonym.innerText=data[0].meanings[0].synonyms
    }
}