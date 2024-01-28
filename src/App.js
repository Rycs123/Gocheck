import { useState } from "react";

const listItem = [
    { id: 1, title: "eat", done: true },
    { id: 2, title: "sleep", done: true },
    { id: 3, title: "code", done: true },
    { id: 4, title: "take a shower", done: false },
    { id: 5, title: "repeat", done: true },
];

const totalTrueValues = listItem.filter((item) => item.done).length;
const totalItems = listItem.length;
const percentageTrueValues = (totalTrueValues / totalItems) * 100;

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <Checklist />
            <Stats />
        </div>
    );
}

function Logo() {
    return <span className="logo">📖 Gocheck ✅</span>;
}

function Form() {
    const [title, setTitle] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Ada yang mau dicatat ga? 🤔</h3>
            <input
                type="text"
                name="title"
                id=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

function Checklist() {
    return (
        <div className="list">
            <ul>
                {listItem.map((item) => (
                    <ShowItemList key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

function ShowItemList({ item }) {
    return (
        <li>
            <input type="checkbox" />
            <span style={{ textDecoration: item.done ? "line-through" : "" }}>
                {item.title}
            </span>
            <button>❌</button>
        </li>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <span>
                Kamu punya {listItem.length} catatan dan baru {totalTrueValues}{" "}
                yang dichecklist ({percentageTrueValues}%) ✅
            </span>
        </footer>
    );
}
export default App;
