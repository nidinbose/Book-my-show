async function addmovie(){

    const name=document.getElementById('name').value;
    const category=document.getElementById('category').value;
    const Likes=document.getElementById('Likes').value;
   

    
    const res=await fetch('http://localhost:4008/api/add', {
         method: 'POST',
    
    headers: {'Content-Type': 'application/json'},
    
    body: JSON.stringify({name, category,Likes,profile})
    
    })
    
    if (res.status==201){
        const data=await res.json(); 
    
        alert(data.msg);
        
        window.location.href='../index.html'
    }
    
   
    }


    let profile=""

document.getElementById("profile").addEventListener('change',async(e)=>{
    profile=await convertToBase64(document.getElementById('profile').files[0])
document.getElementById('img').src=profile
console.log(profile);
})




function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
      
    })
}    