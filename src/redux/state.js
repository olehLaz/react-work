let store = {

    _state:  {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how a you?', likesCount: 12},
                {id: 2, message: 'It s my first post', likesCount: 0},
                {id: 3, message: 't s trust post', likesCount: 5},
            ],
            newPostText: 'value-fixed'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Oleh'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valery'},
                {id: 6, name: 'Andrew'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are your'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Traktor'}
            ]
        }
    },
    getState() {
        let state;
        return state = this._state
    },
    _rerenderEntireTree()  {
        console.log('state was changed')
    },

    addPost ()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText='';
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer;
    }
}

/*
let rerenderEntireTree = () => {
    console.log('state was changed')
}
*/
/*
export const addPost = () => {
    //  debugger;
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}
*/

/*

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

//observer - наблюдатель (функция которую мы отдаём.
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
*/


window.store = store;

export default store;