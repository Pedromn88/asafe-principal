import React, { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { Button } from "../Button";
import { IconDelete, IconEditPencil } from "../utils/icons-component";

async function AddDataToFireStone(name, email, message) {
  if ((name, email, message)) {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        meage: message,
      });
      console.log("agregado con éxito", docRef.id);
    } catch (error) {
      console.error("Error", error);
    }
  }
}

async function DeleteDataToFireStone(id) {
  try {
    const documentRef = doc(db, "messages", id);
    await deleteDoc(documentRef);
    console.log("Documento eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
  }
}

async function updateMessageToFireStone(id, newMessage) {
  if (newMessage) {
    try {
      const documentRef = doc(db, "messages", id);
      await updateDoc(documentRef, {
        meage: newMessage,
      });
      alert("Mensaje actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el mensaje:", error);
    }
  }
}

export const Notes = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [newMessage, setNewMessage] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getDataToFireStone = () => {
    getDocs(collection(db, "messages")).then((snapshot) => {
      let msg = [];
      snapshot.docs.forEach((doc) => {
        msg.push({ ...doc.data(), id: doc.id });
      });
      setData(msg);
    });
  };
  useEffect(() => {
    getDataToFireStone();
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await AddDataToFireStone(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
    } else {
    }
    setLoading((current) => !current);
  };

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 lg:grid-cols-5 ">
      <div className="col-span-3 lg:col-span-2">
        <h1 className="font-black my-5 text-5xl">Notes</h1>
        <div className="shadow-2xl p-20">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                id="Name-notes"
                type="text"
                name="email"
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                id="email-notes"
                type="email"
                name="email"
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Message
              </label>
              <input
                id="message-notes"
                type="text"
                name="message"
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              id="button-add-notes"
              className="bg-asafe"
              type="submit"
              disabled={!name || !email || !message}>
              Enviar{" "}
            </Button>
          </form>
        </div>
      </div>
      <span className="my-5 col-span-3 lg:col-span-3 align-middle">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Message{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Message{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((val, i) => {
                return (
                  <tr
                    className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={i}>
                    <td className="px-6 py-4">{val.name}</td>
                    <td className="px-6 py-4">{val.email}</td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={val.meage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <span>
                        <Button
                          onClick={() =>
                            updateMessageToFireStone(val.id, newMessage)
                          }>
                          <IconEditPencil />
                        </Button>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span>
                        <Button
                          id="button-delete-notes"
                          onClick={() => {
                            DeleteDataToFireStone(val.id);
                            setLoading((current) => !current);
                          }}>
                          <IconDelete />
                        </Button>
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </span>
    </div>
  );
};
