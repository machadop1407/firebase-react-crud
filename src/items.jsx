import { useState, useEffect, useContext } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { UserContext } from "./components/users/User";


function Items() {
    const user = useContext(UserContext);
    let userName = user.loggedInUser.username

    const [newName, setNewName] = useState("");
    const [newprice, setNewprice] = useState(0);
    const [counter, setNewCounter] = useState(0);

    const [drinks, setdrinks] = useState([]);
    const drinksCollectionRef = collection(db, `${userName}/items/drinks`);

    const createdrink = async () => {
        setNewCounter(counter + 1);
        await addDoc(drinksCollectionRef, {
            name: newName,
            price: Number(newprice),
            quantity: 1,
        });
    };


    const updatedrink = async (id, price) => {
        const drinkDoc = doc(db, `${userName}/items/drinks`, id);
        const newFields = { price: price + 1 };
        console.log(counter);
        setNewCounter(counter + 1);
        await updateDoc(drinkDoc, newFields);
    };

    const updateQuantity = async (id, quantity) => {
        const drinkDoc = doc(db, `${userName}/items/drinks`, id);
        const newFields = { quantity: quantity + 1 };
        setNewCounter(counter + 1);
        await updateDoc(drinkDoc, newFields);
    };

    const decreaseQuantity = async (id, quantity) => {
        const drinkDoc = doc(db, `${userName}/items/drinks`, id);
        const newFields = { quantity: quantity - 1 };
        setNewCounter(counter + 1);
        await updateDoc(drinkDoc, newFields);
    };

    const deletedrink = async id => {
        const drinkDoc = doc(db, `${userName}/items/drinks`, id);
        setNewCounter(counter + 1);
        await deleteDoc(drinkDoc);
    };

    useEffect(() => {
        const getdrinks = async () => {
            const data = await getDocs(drinksCollectionRef);
            setdrinks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log("warning for if this is running too many times");
        };

        getdrinks();
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
                placeholder="price..."
                onChange={event => {
                    setNewprice(event.target.value);
                }}
            />

            <button onClick={createdrink}> Create drink</button>
            {drinks.map(drink => {
                return (
                    <div>
                        {" "}
                        <h1>Name: {drink.name}</h1>
                        <h1>price: {`£${drink.price}`}</h1>
                        <h1>quantity: {drink.quantity}</h1>
                        <button
                            onClick={() => {
                                updatedrink(drink.id, drink.price, drink.quantity);
                            }}
                        >
                            {" "}
                            Increase price
                        </button>
                        <button
                            onClick={() => {
                                decreaseQuantity(drink.id, drink.quantity);
                            }}
                        >
                            {" "}
                            Decrease quantity
                        </button>
                        <button
                            onClick={() => {
                                updateQuantity(drink.id, drink.quantity);
                            }}
                        >
                            {" "}
                            Increase quantity
                        </button>
                        <button
                            onClick={() => {
                                deletedrink(drink.id);
                            }}
                        >
                            {" "}
                            Delete drink
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Items;
