class QuickSort{

    constructor(arrayOfObject) {
        this.arrayOfObject = arrayOfObject;
    }
    
    performQuickSort(){        
        this.sort(this.arrayOfObject, 0, this.arrayOfObject.length-1)
    }

    performAverage(){
        let sum = 0
        this.arrayOfObject.forEach(arr=> {sum = sum + arr.ranking})
        return sum/this.arrayOfObject.length
    }

    sort(arr, startIndex, endIndex){
        if(startIndex < endIndex){

        console.log(`partition between ${startIndex} and ${endIndex}`)
        let partitionIndex = this.partition(arr, startIndex, endIndex);
        
        console.log(`sort between startindex = ${startIndex} and partitionedindex = ${partitionIndex-1}`)
        this.sort(arr, startIndex, partitionIndex-1 )

        console.log(`sort between partitionedindex = ${partitionIndex + 1} and endIndex = ${endIndex} `)

        this.sort(arr, partitionIndex + 1, endIndex)

        }
    }

    partition(arr, startIndex, endIndex){
    let pivot = arr[endIndex];
    let i = (startIndex-1);
    for(let j= startIndex; j<endIndex; j++){
        
        console.log(`index ${j} = ${arr[j].ranking}`)

        if(arr[j].ranking <= pivot.ranking){
            i++;
            this.swap(arr, i, j)
        }
    }
    let partitionedValueIndex =  i+1
    this.swap(arr, partitionedValueIndex, endIndex)
    console.log(`returned partitioned value index = ${partitionedValueIndex} and object = ${arr[partitionedValueIndex]}`)
    return partitionedValueIndex
    }

    swap(arr, indexOfFirstElement, indexOfSecondElement){
        let temp = arr[indexOfFirstElement]
        arr[indexOfFirstElement]= arr[indexOfSecondElement]
        arr[indexOfSecondElement]=temp

    //  console.log(arr)
    }


}
let arrayOfObject = [
    {name:"great-5", ranking:5},
    {name:"great-4", ranking:4},
    {name:"great-1", ranking:1},
    {name:"great-7", ranking:7},
    {name:"great-8", ranking:8},
    {name:"great-3", ranking:3},
    ];

let qs = new QuickSort(arrayOfObject)
qs.performQuickSort()
let average = qs.performAverage()
console.log(`avaerage is ${average}`)
console.log(arrayOfObject);

// let testSwap=[1, 5, 4, 9]
// let qs = new QuickSort(testSwap)
// qs.swap(testSwap, 1, 2)
// console.log(testSwap);


