//STEP 1: I get all elements

//console.log('is budget calculator here? ')

//Left section
let inputBudget = document.getElementById('budget') //input "budget global"
let inputBudgetValue = 0;   //value typed by user in "global budget" field

//Down section
let budgetToDisplay = document.querySelector('.income span') //div '.income' h2 "Budget" where the global budget is to be displayed 
let expensesToDisplay= document.querySelector('.expense span') //div  '.expense' h2 "Expenses" where all expenses are to be displayed
let balanceToDisplay= document.querySelector('.balance span') //div '.balance' h2 "Balance" where the current balance is to be displayed

//Right section
let depensesList = document.querySelector('.expenses-list') 

//Left section
let errorMsg = document.querySelector('.num-budget-global') //for error msg to be displayed if the global budget amount isn't typed properly
//console.log(errorMsg)

let inputDepense = document.getElementById('depense') //Field 'Expense'
let inputMontant = document.getElementById('montant') //Field 'Amount'
let btnAdd = document.querySelector('.add-btn')  //Get both the button and the icon

let balance = 0     //set the balance at 0
let allDepenses = 0    //we want all depenses to sum up

let depense = 0
let montant = 0

let eraseBtn = document.querySelector('.reset-btn') 



//STEP 2 : Functions

//Type amount to 'Global Budget' field
function setBudget(){          //declare function which displays and check if its a number        
    inputBudgetValue = parseInt(inputBudget.value,10) //on doit recup the inputBudgetValue en num and not in string for further calculations in functions
    if(isNaN(inputBudgetValue)){
        errorMsg.style.display = 'block'
    }else{
        errorMsg.style.display = 'none'
        budgetToDisplay.textContent = inputBudgetValue
        console.log(typeof(inputBudgetValue))
    }
}
inputBudget.addEventListener('keyup',setBudget)  //event on click when the mouse is out of the field 
                                                //after the click, the value typed appears instantly in 'Budget' field



//Type amount to 'Expense' field
function addDepenses(){
    depense = inputDepense.value
    montant = montant + parseInt(inputMontant.value,10)   //0 + amount typed at 1st 
    //console.log(typeof(montant))          //Recup the Montant en num and not in string
    expensesToDisplay.textContent = montant  //all amounts spent will appear in 'Expenses'(right column)
    updateBalance() //we upload the balance
    addToList() //we add it to the list (right column)
}
btnAdd.addEventListener("click", addDepenses)   //event click on btn to add Amount to 'Expenses'(right column)
updateBalance()


function updateBalance(){
    balance = inputBudgetValue-montant  //global budget minus amount spent
    balanceToDisplay.textContent = balance
}

function addToList(){
    let divItem = document.createElement('div')   //parent div
    let spanItem = document.createElement('span')
    depensesList.append(divItem) //attach(add to the list) the name of the thing bought
    divItem.append(spanItem) //attach the price of the thing bought
    divItem.classList.add('expenses-item') //to add a class
    spanItem.textContent = depense +" "+inputMontant.value

}

function flushEverything(){
    let divsToErase = document.querySelectorAll('.expenses-item') //array of the bought things listed
    for (let i = 0; i<divsToErase.length; i++){
        divsToErase[i].remove()
        montant = 0
        balance = 0
        budgetToDisplay.textContent = "" 
        expensesToDisplay.textContent = "" 
        balanceToDisplay.textContent = "" 
    }
}
eraseBtn.addEventListener("click",flushEverything)



