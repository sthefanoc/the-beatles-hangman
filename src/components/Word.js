import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  const words = selectedWord.split(' ');
  console.log(words);
  return (
    <div className='words-container'>
      {words.map((word,k) => {
        return (
          <div className="word" key={k}>
            {word.split('').map((letter, i) => {
              return (
                <span className="letter" key={i}>
                  {correctLetters.includes(letter) ? letter : ''}
                </span>
              )
            })}
          </div>)
        })}


      {/* <div className="word">
        {selectedWord.split('').map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {correctLetters.includes(letter) ? letter : ''}
            </span>
          )
        })}
      </div> */}
    </div> 
  )
}

export default Word


      {/* {words.map((word, k) => {
        return (
          word.split('').map((letter, i) => {
            return (
              <span className="letter" key={i}>
                {correctLetters.includes(letter) ? letter : ''}
              </span>
            )
          })
        )
      })} */}