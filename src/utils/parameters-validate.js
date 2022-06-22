function verifyParameters(parameter,errorMessage){
    [...parameter].forEach(element => {
        if (element == null) throw new Error(errorMessage)
    });
}



module.exports = { verifyParameters };