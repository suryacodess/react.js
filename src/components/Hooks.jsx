import { useState } from "react";

export default function Hooks() {
  let [count, setCount] = useState(0);
  const [nameInput, setNameInput] = useState("");
  let [user, setUsers] = useState({
    id: 0,
    name: "Surya Prakash",
    age: 25,
  });
  const [valueInput, setValueInput] = useState("");
  const [valueArr, setValueArr] = useState([1, 2, 3, 4, 5, 6]);
  const [updateValueShow, setUpdateValueShow] = useState(false);
  const [editValueIndex, setEditValueIndex] = useState();

  const counter = (type) => {
    if (type === "increase") {
      setCount((prev) => prev + 1);
    } else if (type === "decrease") {
      setCount((prev) => prev - 1);
      if (count < 1) {
        setCount(0);
      }
    }
  };

  const updateName = () => {
    if (nameInput == "") {
      return;
    }
    let updateName = { ...user };
    updateName.name = nameInput;
    setUsers(updateName);
    setNameInput("");
  };

  const addValue = () => {
    if (valueInput == "") return;
    const addedValueArr = [...valueArr];
    addedValueArr.push(valueInput);
    setValueArr(addedValueArr);
    setValueInput("");
  };

  const deleteValue = (index) => {
    let deletedValueArr = [...valueArr];
    deletedValueArr = deletedValueArr.filter((item, i) => {
      return i != index;
    });
    setValueArr(deletedValueArr);
  };

  const editValue = (index) => {
    let editedValueArr = [...valueArr];
    let editedValue = editedValueArr.filter((item, i) => {
      if (i == index) {
        return item;
      }
    });
    setValueInput(editedValue);
    setEditValueIndex(index);
    setUpdateValueShow(true);
  };

  const updateValue = () => {
    let updatedValue = [...valueArr];
    updatedValue = updatedValue.map((item, index) => {
      if (index == editValueIndex) {
        return valueInput;
      }
      return item;
    });
    setValueArr(updatedValue);
    setUpdateValueShow(false);
    setValueInput("");
  };

  return (
    <div className="hooks max-w-[1200px] mx-auto px-2 pt-10">
      <h1 className="text-4xl font-bold poppins">Hooks</h1>
      <h2 className="text-2xl font-bold poppins">UseState</h2>
      <div className="">
        <h1>Increase/descrease the counter: {count}</h1>
      </div>
      <div className="btns flex gap-2 pt-2">
        <button
          onClick={() => counter("increase")}
          className="px-2 py-2 bg-purple-400"
        >
          Increase
        </button>
        <button
          onClick={() => counter("decrease")}
          className="px-2 py-2 bg-purple-400"
        >
          Decrease
        </button>
      </div>

      <div className=" pt-5 flex flex-col gap-5">
        <div className="flex gap-2 flex-col">
          <div className="">
            <input
              type="text"
              className="border-[1px] border-black px-2 py-1"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <button
              className="px-3 py-1 bg-purple-400 text-whtie cursor-pointer"
              onClick={() => updateName()}
            >
              Update name
            </button>
          </div>
          <div className="">
            <h2>id: {user.id}</h2>
            <h2>id: {user.name}</h2>
            <h2>id: {user.age}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="number"
            className="border-[1px] border-black px-2 py-1"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          {!updateValueShow && (
            <button
              className="px-3 py-1 bg-purple-400 text-whtie cursor-pointer"
              onClick={() => addValue()}
            >
              Add number
            </button>
          )}
          {updateValueShow && (
            <button
              className="px-3 py-1 bg-purple-400 text-whtie cursor-pointer"
              onClick={() => updateValue()}
            >
              Update number
            </button>
          )}
        </div>
        {valueArr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex w-[350px] justify-between items-center"
            >
              <h2>{item}</h2>{" "}
              <div className="flex gap-2">
                <button
                  className="px-2 py-1 bg-red-500 text-white cursor-pointer"
                  onClick={() => deleteValue(index)}
                >
                  delete
                </button>
                <button
                  className="px-2 py-1 bg-green-500 text-white cursor-pointer"
                  onClick={() => editValue(index)}
                >
                  edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
