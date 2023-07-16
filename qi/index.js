const data = require('./data.json')

const { resp_data: { topics } } = data

topics.forEach((topic) => {
  // console.log(topic)
  const { question, answer } = topic;
  const { text: questionText, owner: { name: questioner }, images } = question;
  const { text: answerText, owner: { name: questionee } } = answer;
  console.log(`${questioner}: ${questionText}\n`)

  images?.forEach((imageObj) => {
    // const { large: { url } } = imageObj;
    const { thumbnail: { url } } = imageObj;
    console.log(`![${url}](${url})\n`)
  })
  console.log(`> ${questionee}: ${answerText}\n`)
  console.log('---')
});