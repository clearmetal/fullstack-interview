import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [comments, setComments] = useState([])
  const getComments = async () => {
    const resp = await axios.get('comments')
    setComments(resp.data)
  }
  useEffect(() => {
    getComments()
  }, [])

  return (
    <div>
      {comments.map(comment => (<div key={comment.id}>{comment.content}</div>))}
    </div>
  )
}

// In case the candidate is more comfortable with class components
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {comments: []}
//   }
//
//   async componentDidMount() {
//     const resp = await axios.get('comments')
//     this.setState({ comments: resp.data })
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.comments.map(comment => (<div key={comment.id}>{comment.content}</div>))}
//       </div>
//     )
//   }
// }

export default App;
