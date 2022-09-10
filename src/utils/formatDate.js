const formatDate = (date) => {
    const theDate = new Date(date);
    let day = `${theDate.getDate()}`;
    let month = `${theDate.getMonth() + 1}`;
    const year = theDate.getFullYear();

    if (day < 2) day = `0${day}`;
    if (month < 2) month = `0${month}`;

    return [year, month, day].join('-');
}

export default formatDate;