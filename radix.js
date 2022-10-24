//util functions 


function radixSort(arr) {
    const getDigit = (num, idx) => {
        const strNum = String(num);
        let end = strNum.length - 1;
        const foundNum = strNum[end - idx];
        if (foundNum === undefined) return 0;
        return foundNum;
    }

    const largestNum = arr => {
        let largest = "0";
        arr.forEach(num => {
            const strNum = String(num);
            if (strNum.length > largest.length) largest = strNum;
        })
        return largest.length;
    }
    let maxLength = largestNum(arr);
    for (let i = 0; i < maxLength; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; i < arr.length; j++) {
            let num = getDigit(arr[j], i);
            if (num !== undefined) {
                buckets[num].push(arr[j]);
            }
            console.log(buckets);
        }
        arr = buckets.flat()
    }
    return arr
}

module.exports = radixSort;