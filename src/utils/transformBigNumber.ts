export const transformBigNumber = (number:number):string => {
    return new Intl.NumberFormat().format(number);
}