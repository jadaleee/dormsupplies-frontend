// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

function hasFalsyValue(obj) {
	// Undefined, null, false, 0, NaN, ‘’
	if (obj){
		return true
	}
    return false
}

hasFalsyValue(undefined)
hasFalsyValue(null)
hasFalsyValue(false)
hasFalsyValue(0)
hasFalsyValue(NaN)
hasFalsyValue('')