import { useEffect, useState } from "react";
import { db } from "./firebase";
import { v4 } from "uuid";
import { set, ref, onValue, remove, update } from "firebase/database";
import {
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { imageDb } from "./firebase";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempId, setTempId] = useState("");
  const [img, setImg] = useState("");
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };
  //firebase add
  const writeToDataBase = () => {
    const uuid = v4();
    if (todo !== "") {
      set(ref(db, `/${uuid}`), {
        todo,
        uuid,
      });
    }

    setTodo("");
  };
  //firebase write
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((prev) => [...prev, todo]);
        });
      }
    });
  }, []);
  //firebase delet
  const handleDelet = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempId(todo.uuid);
    setTodo(todo.todo);
  };
  const handleSubmitChange = () => {
    update(ref(db, `/${tempId}`), {
      todo,
      uuid: tempId,
    });
    setTodo("");
    setIsEdit(false);
  };

  return (
    <>
      <div className="app grid gap-6 ml-8 mt-8 border-2 border-gray p-4 w-1/4">
        <div className="flex">
          <input
            type="text"
            className="border border-indigo px-3"
            value={todo}
            onChange={handleTodoChange}
            placeholder="Enter name..."
          />
          {isEdit ? (
            <>
              <button
                onClick={handleSubmitChange}
                className="border border-gray p-2 w-1/2"
              >
                Save
              </button>
              <button
                className="border border-gray p-2 w-1/2"
                onClick={() => {
                  setIsEdit(false);
                  setTodo("");
                }}
              >
                Close
              </button>
            </>
          ) : (
            <button
              onClick={writeToDataBase}
              className="border border-gray p-2 w-1/2"
            >
              Send
            </button>
          )}
        </div>
        <div>
          <input
            type="file"
            className=""
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
      </div>
      <div>
        {todos !== true
          ? todos.map((todo) => (
              <>
                <div className="ml-8 mt-8 border border-gray w-1/4">
                  <div className="flex p-2">
                    <p className="text-center text-xl font-bold ml-3">Name:</p>
                    <p className="text-center text-xl font-semibold ml-2">
                      {todo.todo}
                    </p>
                  </div>
                  <button
                    onClick={() => handleUpdate(todo)}
                    className="border border-gray p-2 w-1/2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelet(todo)}
                    className="border border-gray p-2 w-1/2"
                  >
                    Delet
                  </button>
                </div>
              </>
            ))
          : ""}
      </div>
    </>
  );
}

export default App;
