const billInput: HTMLInputElement = document.querySelector('#bill') as HTMLInputElement
const peopleInput = document.querySelector('#people') as HTMLInputElement
const customInput = document.querySelector('#custom')
const reset = document.querySelector('#resetBtn') as HTMLButtonElement
const tipsBtn = document.querySelectorAll<HTMLButtonElement>('.btn')
const tipAmountPerPerson = document.querySelector('#tipAmount') as HTMLSpanElement
const totalPerPerson = document.querySelector('#total') as HTMLSpanElement

billInput.value = '0.0'
peopleInput.value = '1'
tipAmountPerPerson.innerHTML = '$' + (0.0).toFixed(2)
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2)

let billValue: number = 0.0
let peopleValue: number = 1
let tipSelected: number = NaN

const billInputChange = () => {
	billValue = parseFloat(billInput.value)
	calculateTip()
}

const peopleInputChange = () => {
	peopleValue = parseFloat(peopleInput.value)
	calculateTip()
}

billInput.addEventListener('input', billInputChange)
peopleInput.addEventListener('input', peopleInputChange)



const handleClick = (event: any) => {
	tipsBtn.forEach(btn => {
		btn.classList.remove('active')
	})
	event.target.classList.add('active')
	tipSelected = Number(event.target.value)
	calculateTip()
}

tipsBtn.forEach(btn => {
	btn.addEventListener('click', handleClick)
})

const calculateTip = () => {
	const tipAmount = (billValue * (tipSelected / 100)) / peopleValue
	const totalAmount = billValue / peopleValue + tipAmount

	tipAmountPerPerson.innerHTML = '$' + tipAmount.toFixed(2)
	totalPerPerson.innerHTML = '$' + totalAmount.toFixed(2)
}

const resetBtn = () => {
	tipAmountPerPerson.innerHTML = '$0.00'
	totalPerPerson.innerHTML = '$0.00'
	billInput.value = '0.0'
	peopleInput.value = '1'
	tipsBtn.forEach(btn => {
		btn.classList.remove('active')
	})
}

reset.addEventListener('click',resetBtn)
