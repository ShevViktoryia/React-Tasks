export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";

const initialState = {
  posts: [
    {
      id: 1,
      title: "fugiat veniam minus",
      text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 2,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      id: 3,
      title: "nesciunt quas odio",
      text: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
  ]
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.payload.id)
      }
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id == action.payload.id ? {...post, title: action.payload.title, text: action.payload.text} : post)
      }
      default:
        return state;
  }
}