import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [updateItemShow, setUpdateItemShow] = useState(false);
  const [editedItemIndex, setEditedItemIndex] = useState();

  const addItem = () => {
    let item = [...items];
    item.push(input);
    setItems(item);
    setInput("");
  };

  const deleteItem = (index) => {
    let newItems = [...items];
    setItems(
      newItems.filter((item, i) => {
        return i != index;
      })
    );
  };

  const editItem = (index) => {
    let editedItem = [...items];
    editedItem = editedItem.filter((item, i) => {
      if (i == index) {
        return item;
      }
    });
    setInput(editedItem);
    setUpdateItemShow(true);
    setEditedItemIndex(index);
  };

  const updateItem = () => {
    let updatedItems = [...items];

    updatedItems = updatedItems.map((item, index) => {
      if (index == editedItemIndex) {
        return input;
      }
      return item;
    });
    setItems(updatedItems);
    setInput("");
    setUpdateItemShow(false);
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <div className="todo-app max-w-[1200px] mx-auto">
      <div className="heading w-full flex justify-center items-center py-10">
        <h2 className="text-4xl font-bold text-purple-900">Todo App</h2>
      </div>
      <div className="todo-content w-full">
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-[2px] border-purple-900 px-3 py-2"
          />
          <div className="flex gap-2">
            {!updateItemShow && (
              <button
                className="px-4 py-2 bg-purple-500 border-[2px] border-purple-900 text-white cursor-pointer"
                onClick={() => addItem()}
              >
                Add Item
              </button>
            )}
            {updateItemShow && (
              <button
                className="px-4 py-2 bg-purple-500 border-[2px] border-purple-900 text-white cursor-pointer"
                onClick={() => updateItem()}
              >
                Update Item
              </button>
            )}
            {items.length > 0 && (
              <button
                className="px-4 py-2 bg-purple-500 border-[2px] border-purple-900 text-white cursor-pointer"
                onClick={() => clearItems()}
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        <div className="todo-lists max-w-[800px] flex flex-col mx-auto pt-10 gap-4">
          {items.map((item, index) => {
            return (
              <div
                className="todo-list-item flex justify-between items-center bg-purple-400 p-3 rounded-2xl"
                key={index}
              >
                <p className="text-white">{item}</p>

                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 bg-purple-500 border-[2px] border-purple-900 text-white cursor-pointer"
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-purple-500 border-[2px] border-purple-900 text-white cursor-pointer"
                    onClick={() => deleteItem(index)}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
