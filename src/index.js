import sleigh from './data/sleigh.js'
import { checkSleigh } from './utils/check.js'

const testResults = checkSleigh(sleigh)
console.log('Results:', testResults)
