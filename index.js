
console.log(format_bytes(100000000000))

//
//	Convert bytes to a human readable form
//
function format_bytes(bytes, decimals)
{
	//
	//	If the size is 0, then we can stop right away.
	//
	if(bytes == 0)
	{
		return '0 Byte';
	}

	//
	//	Convert bytes to kilobytes
	//
	let k = 1000;

	//
	//	Set how many position after decimal to show
	//
	let decimal = decimals + 1 || 3;

	//
	//	Array with all the possible formats.
	//
	let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	//
	//	returns the logarithm of a with base b
	//
	//	Logarithms find the cause for an effect, i.e the input for some output
	//
	//	Find natural log of bytes
	//
	//	e = natureal languege of growth
	//
	//	Find the cause of the result
	let bytes_log = Math.log(bytes);

	//
	//	Find the cause of the result
	//
	let k_log = Math.log(k);

	//
	// divide the two
	//
	let base = bytes_log / k_log;

	//
	//	Remove the decimal position and round up the value
	//
	let i = Math.floor(base);

	//
	// calculates the power
	//
	let power = Math.pow(k, i)

	//
	//	Convert bytes in to a human readable size
	//
	let human_form = bytes / power;

	//
	//	Set how many decimal places do we want to display
	//
	let formated_nr = human_form.toFixed(decimal);

	//
	// parses a string argument and returns a floating point number
	//
	let fpn = parseFloat(formated_nr)

	console.log(bytes_log, k_log, base, i, power, human_form, fpn)

	//
	// -> Return the human readable byte cont.
	//
	return fpn + ' ' + sizes[i];
}