import { ActionCreators } from '../redux/notesReducer';

export const GetNotes = async (dispatch) => {
  try {
    //fake api call
    const response = [
      { value: 'Study for exam in 3 weeks', id: 1 },
      { value: 'Study hard', id: 2 },
      { value: 'Build more apps', id: 3 },
      { value: 'Write more notes', id: 4 },
    ];
    dispatch(ActionCreators.setNotes(response));
  } catch {
    console.log('Error!');
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    dispatch(ActionCreators.deleteNote(note));
  } catch {
    console.log('Error!');
  }
};
