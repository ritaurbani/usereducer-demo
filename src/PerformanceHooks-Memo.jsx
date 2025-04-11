import { useEffect, useState, memo } from "react";

const UserCard = memo(({name, username, website, email, title, age, color}) => {//con memo quando incremento count non mi ricrea cards da 0
    console.log("Render UserCard:", username);
    return (
        <div className="card">
            <h2>{title}</h2>
            <h3>{name}({username})</h3>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Color: {color}</p>
        </div>
    );
});


export default function App1() {
//Ogni volta che incremento counter anche il componente App viene ricostruito e ogni usercard viene ricreata da 0
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const res = await fetch ("https://freetestapi.com/api/v1/users");
        const data = await res.json();
        setUsers(data)
    }
    useEffect(() => {//al mounting chiamata users salvato nello stato
        loadUsers()
    }, [])


return (
    <div>
        <button onClick={() => setCount(count + 1)}>Incrementa</button>
        <p>Count: {count}</p>
        {
            users.map((user, i) => (
                <UserCard key={i} 
                title="ciao"
                color="blue"
                age={30}
                {...user}/>
            ))
        }
    </div>
)

}