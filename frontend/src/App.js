import React, { useEffect, useState } from 'react';
import axios from 'axios'

const api = {
  getComments: () => {
    return axios.get('/comments')
  },
  createComment: () => {
    return
  },
  deleteComment: () => {
    return
  },
  updateComment: () => {
    return
  },
}

function App() {
  const [comments, setComments] = useState([])
  const getComments = async () => {
    const resp = await api.getComments()
    setComments(resp.data)
  }
  useEffect(() => {
    getComments()
  }, [])

  return (
    <div style={{ width: 1000 }}>
      {comments.map(comment => (
        <div
          key={comment.id}
          style={{
            margin: 10,
            padding: 10,
            border: '1px solid black',
            borderRadius: 5,
          }}
        >
          {comment.content}
        </div>
      ))}
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
//     const resp = await api.getComments()
//     this.setState({ comments: resp.data })
//   }
//
//   render() {
//     return (
//       <div style={{ width: 1000 }}>
//         {this.state.comments.map(comment => (
//           <div
//             key={comment.id}
//             style={{
//               margin: 10,
//               padding: 10,
//               border: '1px solid black',
//               borderRadius: 5,
//             }}
//           >
//             {comment.content}
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

export default App;
