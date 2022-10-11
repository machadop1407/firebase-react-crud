import { useState, useEffect, useContext } from "react";
import "../App.css";
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { UserContext } from "./users/User";

function Users() {
    const user = useContext(UserContext);
    let userName = user.loggedInUser.username
    const [newName, setNewName] = useState("");
    const [newlevel, setNewlevel] = useState(0);
    const [counter, setNewCounter] = useState(0);

    const [users, setusers] = useState([]);
    const usersCollectionRef = collection(db, `${userName}/users/user`);
    const createusers = async () => {
        setNewCounter(counter + 1);
        await addDoc(usersCollectionRef, {
            name: newName,
            level: Number(newlevel),
        });
    };

    const updateusers = async (id, level) => {
        const usersDoc = doc(db, `${userName}/users/user`, id);
        const newFields = { level: level + 1 };
        console.log(counter);
        setNewCounter(counter + 1);
        await updateDoc(usersDoc, newFields);
    };


    const deleteusers = async id => {
        const usersDoc = doc(db, `${userName}/users/user`, id);
        setNewCounter(counter + 1);
        await deleteDoc(usersDoc);
    };

    useEffect(() => {
        const getusers = async () => {
            const data = await getDocs(usersCollectionRef);
            setusers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log("warning for if this is running too many times");
        };

        getusers();
    }, [counter]);


    return (
        <div className="App">
            <input
                placeholder="Name..."
                onChange={event => {
                    setNewName(event.target.value);
                }}
            />
            <input
                type="number"
                placeholder="level..."
                onChange={event => {
                    setNewlevel(event.target.value);
                }}
            />

            <button onClick={createusers}> Create users</button>
            {users.map(users => {
                return (
                    <div>
                        {" "}
                        <h1 className="text-3xl font-bold underline">Name: {users.name}</h1>
                        <h1 className="text-3xl font-bold underline">level: {`${users.level}`}</h1>
                        <button
                            onClick={() => {
                                updateusers(users.id, users.level);
                            }}
                        >
                            {" "}
                            Increase level
                        </button>
                        <button
                            onClick={() => {
                                deleteusers(users.id);
                            }}
                        >
                            {" "}
                            Delete users
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Users;
