function getErrorMessage(error){
    switch(error){
        case "month": 
            return "Mês Inválido (Tipo ou Nome Incorretos)"
        case "year": 
            return "Ano Inválido"
        case "name": 
            return "Nome Inválido"
        default: 
            return error.message
    }
}


export function getErrorsMessages(errors){
    return errors.map(err => getErrorMessage(err))
}

