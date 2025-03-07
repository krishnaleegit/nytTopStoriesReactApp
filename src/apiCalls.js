const apiCalls = {
  getTopStories() {
    const apiKey = process.env.REACT_APP_NYY_API_KEY
    const API_URL=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;
    return fetch(API_URL)
      .then(res => res.json())
  }
}

export default apiCalls;