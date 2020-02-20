const getErrorForParam = (errors, targetParam) => {
    if(!errors) return '';

    const erroresDelParam = errors.filter(e => e.param === targetParam);

    if (erroresDelParam.length > 0) {
        return erroresDelParam[0].msg
    } else {
        return ''
    }
}

export default getErrorForParam