//
//	Convert bytes to a human readable form
//
module.exports = function(bytes, decimals)
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
	//	Set how many position after decimal to show. The default is 3
	//
	let decimal = decimals || 3;

	//
	//	Array with all the possible formats.
	//
	let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	//
	//	Find the log with base of e
	//
	let bytes_log = Math.log(bytes);

	//
	//	Find the log with base of e
	//
	let k_log = Math.log(k);

	//
	// Divide the two
	//
	let base = bytes_log / k_log;

	//
	//	Remove the decimal position and round up the value.
	//
	//	This value will be used to determine the human readable size should be
	//	selected from the sizes array.
	//
	let i = Math.floor(base);

	//
	// Calculates the power
	//
	let power = Math.pow(k, i);

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
	let fpn = parseFloat(formated_nr);

	//console.log(bytes_log, k_log, base, i, power, human_form, fpn)

	//
	// -> Return the human readable byte cont.
	//
	return fpn + ' ' + sizes[i];
}