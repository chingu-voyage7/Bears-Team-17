export const saveQuestion = question =>
  fetch('/api/question', {
    method: 'post',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(question)
  }).then(res => res.json())
  .then(res => {
    console.log('save question results');
  });

  export const getQuestions = () => {
    fetch('/api/question', {
      method: 'get',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(res => res.json())
      .then(res => {
        console.log('get question response:', res);
      });
  };
