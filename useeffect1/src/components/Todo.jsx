import { useEffect, useState } from "react";

export const Todo = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTodo()
    }, [page]);

    const getTodo = () => {

        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`).then(d => d.json()).then(res => {
            // console.log(res);
            setTodo(res);
        });

    }

    const addTodo = () => {
        const payload = {
            title: text,
            status: false,
        };

        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json",
            },
        }).then(() => {
            getTodo();
            setText("")
        })

        //   setTodos([...todos, text]);
    };

    return (
        <div>
            <input
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Todo"
            />
            <button onClick={addTodo}>add todo</button>
            {todo.map((e, i) => (
                <div key={i}>{e.title}</div>
            ))}

            {/* Pagination */}
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <button onClick={() => setPage(page + 1)}>Next</button>



        </div>
    );
};
