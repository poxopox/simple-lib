
export function sort(arr, start, end) {
    if ( start >= end) return;
    let index = partition(arr, start, end);
    sort
}

function partition (arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
        
    }
}