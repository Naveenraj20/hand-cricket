bgc=0,user_curent_score=0,cpu_curent_score=0,c=1,over=1;

const res = document.getElementById('result')
const hand = document.getElementById('hand');
if(over == 1){
document.querySelector('.ha0').addEventListener('mouseover',()=>{    
    cv=0;
    bgc=0;
    swt(cv);
})
document.querySelector('.ha1').addEventListener('mouseover',()=>{
    cv=1;
    bgc=0;
    swt(cv);
})
document.querySelector('.ha2').addEventListener('mouseover',()=>{    
    cv=2;
    bgc=0;
    swt(cv);
})
document.querySelector('.ha3').addEventListener('mouseover',()=>{
    cv=3;
    bgc=0;
    swt(cv);
})
document.querySelector('.ha4').addEventListener('mouseover',()=>{
    cv=4;
    bgc=0;
    swt(cv);
})
document.querySelector('.ha5').addEventListener('mouseover',()=>{
    cv=5;
    bgc=0;
    swt(cv);
})
document.querySelector('.ha6').addEventListener('mouseover',()=>{
    cv=6;
    bgc=0;
    swt(cv);
})

const bg = document.getElementById('inono');

// ----------------------------------------------------------------------------------------------------


function swt(a){
    if(over != 0){
        if(bgc == 0)
        {
            bg.style.backgroundColor = "blue";
        }
        const arr=[0,1,2,3,4,5,6];
        const earr=['✊','☝','✌','🤟','🖖','🖐','👍'];
        res.innerHTML = earr[a];
        const v = arr[Math.floor(Math.random()*7)];
        (document.querySelector('#rescpu')).innerHTML = earr[v];

        if(v == a){
            (document.querySelector('#outnotout')).innerHTML = "OUT";
            bg.style.backgroundColor = "red";
            bgc = 1;
            if(user_curent_score == 0){
                op2 = 0;
            }
            user_curent_score='*';
            c++;
        }
        else{
            (document.querySelector('#outnotout')).innerHTML = "NOT OUT";
            if(user_curent_score != '*'){
                if(a == 0){
                    user_curent_score+=v;
                }
                else{
                    user_curent_score+=a;
                }
                op2=user_curent_score;
                user.innerHTML = user_curent_score;
            }
            else{
                if(c == 2){
                    if(v==0){
                        cpu_curent_score+=a;
                    }
                    else{
                        cpu_curent_score +=v;
                    }
                    cpus.innerHTML = cpu_curent_score;
                    if(cpu_curent_score > op2 ){
                        op1 = cpu_curent_score;
                        finalResult(op1,op2);
                    }
                }
                else{
                    console.log(c);
                    op1 = cpu_curent_score;
                    finalResult(op1,op2);
                }
            }
        }
        bgc=0;
    }
}


// ----------------------------------------------------------------------------------------------------------

const user = document.getElementById('user');
user.innerHTML = user_curent_score;
const cpus = document.getElementById('cpu');
cpus.innerHTML = cpu_curent_score;

// ----------------------------------------------------------------------------------------------------------


function finalResult(op1,op2){
    if(op1 < op2)
        (document.querySelector('#outnotout')).innerHTML = "YOU win's the match";
    else if(op1 > op2)
        (document.querySelector('#outnotout')).innerHTML = "CPU win's the match";
    else
        (document.querySelector('#outnotout')).innerHTML = "Oops! match draw";
    over = 0;
    bg.classList.add('dance');
    console.log(bg);
    }
}