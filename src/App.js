const listItem = [
    { id: 1, title: "eat", done: true },
    { id: 2, title: "sleep", done: true },
    { id: 3, title: "code", done: true },
    { id: 4, title: "repeat", done: true },
];

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
    return (
        <div className="add-form">
            <h3>Ada yang mau dicatat ga? 🤔</h3>
        </div>
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
                Kamu punya x catatan dan baru x yang dichecklist (%x) ✅
            </span>
        </footer>
    );
}
export default App;
