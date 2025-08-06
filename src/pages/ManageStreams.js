import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firebaseConfig";
import { FaTrash } from "react-icons/fa6";

export default function ManageStreams() {
    const [streams, setStreams] = useState([]);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    // Загрузка трансляций из Firestore
    const fetchStreams = async () => {
        const querySnapshot = await getDocs(collection(db, "streams"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setStreams(data);
    };

    useEffect(() => {
        fetchStreams();
    }, []);

    // Добавление трансляции в Firestore
    const handleAddStream = async (e) => {
        e.preventDefault();
        if (!title || !url) return alert("Заполните все поля!");

        await addDoc(collection(db, "streams"), { title, url, secret: 'alzhan-key-2025dhasuashdas7hda8sh' });
        setTitle("");
        setUrl("");
        fetchStreams();
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "streams", id)); // Удаляем документ из коллекции streams
        fetchStreams(); // Обновляем список трансляций
    };

    return (
        <div className="streams-page">
            <h2 className="page-title">Управление трансляциями</h2>

            <form className="stream-form" onSubmit={handleAddStream}>
                <input
                    type="text"
                    placeholder="Название трансляции"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Ссылка на трансляцию (YouTube embed)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>

            <div className="streams-table">
                {streams.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Ссылка</th>
                                <th>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                            {streams.map((stream) => (
                                <tr key={stream.id}>
                                    <td>{stream.title}</td>
                                    <td>
                                        <a href={stream.url} target="_blank" rel="noopener noreferrer">
                                            Перейти {stream.url}
                                        </a>
                                    </td>
                                    <td>
                                        <div className="manage-btn" onClick={() => handleDelete(stream.id)}>
                                            <FaTrash size={16} color="white" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-streams">Пока нет добавленных трансляций</p>
                )}
            </div>
        </div>
    );
}
