require('babel-register')

const path = require('path')
const iterateLoadedData = require(path.join(process.cwd(), 'src/server/iterateLoadedData.js')).default

const testData = `{"id":"3","title":"foo foo bar","checked":false}
{"id":"1","title":"bar foo","checked":true}
{"id":"4","title":"bar baz bar","checked":false}
{"id":"2","title":"baz bar foo bar","checked":true}`

const iterator = iterateLoadedData(testData)

const expectedIds = ['3', '1', '4', '2']

let count = 0

while (true) {
  const entry = iterator.next()

  if (entry.done) {
    break
  } else {
    if (count + 1 > expectedIds.length) {
      throw new Error(`Der Iterator hat mehr als die erwartete Anzahl an Objekten (${expectedIds.length}) zurückgeliefert`)
    }

    const data = entry.value

    if (typeof data !== 'object') {
      throw new Error(`In Iteration ${count + 1} hat der Iterator kein Objekt als Wert zurückgeliefert`)
    }

    if (data.id !== expectedIds[count]) {
      throw new Error(`In Iteration ${count + 1} hat der Iterator ein Objekt mit der Id ${data.id} zurückgeliefert,` +
        ` erwartet wurde aber Id ${expectedIds[count]}`)
    }

    count++
  }
}

if (count < expectedIds.length) {
  throw new Error(`Der Iterator hat weniger (${count}) als die erwartete Anzahl an Objekten (${expectedIds.length}) zurückgeliefert`)
} else {
  console.log('Alles OK!')
}
