const getDate = (doj, plan) => {
    let date = [];
    date = doj.split('-');
    let endDate = new Date(date[0], date[1] - 1 + (+plan), date[2]);
    return endDate;
};

const getBalance = (amount, paid) => {
    return (+amount - (+paid));
    /* switch (plan) {
        case '1': {
            balance = 2500 - (+paid);
            break;
        }

        case '3': {
            balance = 7500 - (+paid);
            break;
        }

        case '6': {
            balance = 10000 - (+paid);
            break;
        }

        default: balance = 0;

    } */

    //return balance;
};

export {
    getDate,
    getBalance
};