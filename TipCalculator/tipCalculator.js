(function(){
    const services=[
        {
            value:1,
            title:"great 20%",
        },
        {
            value:2,
            title:"average 10%",
        },
        {
            value:3,
            title:"bad 2%",
        },
    ]

    services.forEach(function(service){
        const option = document.createElement('option');
        option.textContent = service.title;
        option.value = service.value;

        document.getElementById('input-service').appendChild(option);
        })
//get all the values

const form = document.getElementById('tip-form');
const amount = document.getElementById('input-bill');
const users = document.getElementById('input-users');
const service = document.getElementById('input-service');

//customer feedback
const feedback = document.querySelector('.feedback');
const loader = document.querySelector('.loader');
const result = document.querySelector('.result');

//submit form
form.addEventListener('submit',function(event){
    event.preventDefault();
    let bill = amount.value;
    let people = users.value;
    let quality = service.value;

    if(bill == "" || bill < "0" || (people === "" || people < "0")||quality=="0"){
        feedback.classList.add('showItem');
        feedback.innerHTML=`
        <p>please check the value</p>
        <p>bill amount can not be zero</p>
        <p>people must be more than zero</p>
        <p>quality must be positive</p>
        `;
        setTimeout(function(){
            feedback.classList.remove('showItem');
        },4000)
    }
    else{
        feedback.classList.add('showItem');
        feedback.innerHTML=`<p>CALCULATING...</p>`;
        loader.classList.add('showItem');
    
        setTimeout(function(){
            feedback.classList.remove('showItem');
            loader.classList.remove('showItem')
        
            showResult(bill,people,quality);
            clearForm();
        },3000);
    }
})

function showResult(bill,people,quality){
    let percent = 0;

    if(quality==="1"){
        percent = 0.2;
    }
    else if(quality==="2"){
        percent=0.1;
    }
    else if(quality==='3'){
        percent=0.02;
    }
    let tipAmount = parseInt(bill) * percent;
    let total = parseInt(bill) + tipAmount;
    let person = total / parseInt(people);

    result.classList.add('showItem');
    document.getElementById('tip-amount').textContent = tipAmount.toFixed(2);
    document.getElementById('total-amount').textContent = total.toFixed(2);
    document.getElementById('person-amount').textContent = person.toFixed(2);
    
}
function clearForm() {
    amount.value = '';
    users.value = '';
    service.value = '';
}
})();