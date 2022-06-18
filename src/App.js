import React from 'react'
import Jokes from './components/jokes'

export default function App() {
  const colors = [
    <h3>Red</h3>,
    <h3>Orange</h3>,
    <h3>Yellow</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Indigo</h3>,
    <h3>Violet</h3>
  ]
  return (
    <div>
      {colors}
    </div>
  )
}

// eslint-disable-next-line no-lone-blocks
{/* <Jokes
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Jokes
        setup='I got my daughter a fridge for her birthday.'
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}
      />
      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
      />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
      /> */}