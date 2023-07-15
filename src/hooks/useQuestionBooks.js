import { useState, useEffect } from "react";

export const useQuestionBooks = () => {
    const [questionBooks, setQuestionBooks] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getQuestionBooks = async () => {
            const response = await fetch('http://localhost:3000/api/question_books.json')
            const data = await response.json()
            setQuestionBooks(data)
            setLoading(false)
        }
        getQuestionBooks()
    }, [])

    return { questionBooks, loading }
}

export const useQuestionBook = (id) => { //com parametro
    const [questionBook, setQuestionBook] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const questionBookData = async () => {
            const response = await fetch(
                `http://localhost:3000/api/question_books/${id}.json`
            );
            const data = await response.json();
            setQuestionBook(data);
            setLoading(false)
        };

        questionBookData();
    }, [id]);

    return { questionBook, loading };
};