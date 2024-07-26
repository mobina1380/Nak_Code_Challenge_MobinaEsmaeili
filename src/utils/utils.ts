import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'

export const isValidArray = (element: unknown[] | undefined | null): boolean =>
  isArray(element) && !isEmpty(element)

export const calculateCollatzLoops = (num: number): number => {
  let count = 0
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = 3 * num + 1
    }
    count++
  }
  return count
}

export const calculateFibonacci = (num: number): [number, number] => {
  let a = 0,
    b = 1
  while (b <= num) {
    const temp = b
    b = a + b
    a = temp
  }
  return [a, b]
}
