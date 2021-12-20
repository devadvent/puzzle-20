import { checkSleigh } from '../src/utils/check.js'

test('Test Sleigh #1', async () => {
    const sleigh = {
        serial: 'f8b3e755-9b8c-40fb-a9b0-33d7e33e864d',
        version: '2021.713',
        compass: 1,
        humiditySensor: 1,
        accelerometer: 1,
        navigation: 1,
        langdingSuspension: 1,
        breaks: 1,
        pressureSensor: 1,
        temperatureSensor: 1,
        gyroscope: 1,
        windSensor: 1,
    }
    expect(checkSleigh(sleigh)).toBe('ABCGHLNPTW')
})

test('Test Sleigh #2', async () => {
    const sleigh = {
        serial: 'eb350c53-1684-4419-a305-410a1673541b',
        version: '2021.144',
        compass: 0,
        humiditySensor: 0,
        accelerometer: 0,
        navigation: 0,
        langdingSuspension: 0,
        breaks: 0,
        pressureSensor: 0,
        temperatureSensor: 0,
        gyroscope: 0,
        windSensor: 0,
    }
    expect(checkSleigh(sleigh)).toBe('X')
})

test('Test Sleigh #3', async () => {
    const sleigh = {
        serial: '07c1e0ae-d08b-4ae7-9eea-05e87b292535',
        version: '2021.893',
        compass: 0.9205,
        humiditySensor: 0.9853,
        accelerometer: 0.9983,
        navigation: 0.9673,
        langdingSuspension: 0.6486,
        breaks: 0.7564,
        pressureSensor: 0.9731,
        temperatureSensor: 0.9028,
        gyroscope: 0.9967,
        windSensor: 0.921,
    }
    expect(checkSleigh(sleigh)).toBe('ACGHNPTW')
})

test('Test Sleigh #4', async () => {
    const sleigh = {
        serial: 'c05a60d2-a02f-436b-80d2-387500904f25',
        version: '2021.309',
        compass: 0.8105,
        humiditySensor: 0.2953,
        accelerometer: 0.9983,
        navigation: 0.9173,
        langdingSuspension: 0.9626,
        breaks: 0,
        pressureSensor: 0.9692,
        temperatureSensor: 0.8928,
        gyroscope: 0.8731,
        windSensor: 0.398,
    }
    expect(checkSleigh(sleigh)).toBe('ALNP')
})

test('Test Sleigh #4', async () => {
    const sleigh = {
        serial: 'b3b43539-c79a-41e1-951f-ba1dfa727a6b',
        version: '2021.239',
        compass: 0,
        humiditySensor: 0,
        accelerometer: 0,
        navigation: 0,
        langdingSuspension: 0.9626,
        breaks: 0.9913,
        pressureSensor: 0,
        temperatureSensor: 0,
        gyroscope: 0,
        windSensor: 0,
    }
    expect(checkSleigh(sleigh)).toBe('BL')
})
