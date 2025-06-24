export function mergeSort(arr) {
  let steps = [];
  function mergeSortRecursive(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortRecursive(arr.slice(0, mid));
    const right = mergeSortRecursive(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left, right) {
    let result = [];
    let l = 0, r = 0;

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
      steps.push([...result, ...left.slice(l), ...right.slice(r)]);
    }

    return [...result, ...left.slice(l), ...right.slice(r)];
  }

  const sorted = mergeSortRecursive(arr);
  steps.push(sorted);
  return steps;
}
