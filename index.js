/* fetchData();

async function fetchData(){

    try{

        const villager = document.getElementById("villager").value.
        const response = await fetch(`API`)

        if(!response.ok){
            throw new Error("Error");
        }

        const data = await reponse.json();
        const blahblah = data.blahblah.font_default;
        const imgElement = document.getElementById("blahblah");

        imgElement.src = blahblah;

    }
    catch(error){
        console.error(error);
    }
}