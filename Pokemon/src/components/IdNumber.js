const idNumber = (num) => {
	if (num > 99)
	return num 
	else if (num > 9 && num <= 99)
	return `0${num}`
	else return `00${num}`
}

export {idNumber}

//kodinsipiration från Julia https://github.com/jt1230/poke-manager-react/blob/main/src/components/poke-number.js