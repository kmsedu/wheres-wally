import {
  doc,
  setDoc,
  collection,
  getDocs,
  orderBy,
  query
} from 'firebase/firestore/lite'
import { firebaseDB } from './initFirebase'
import { ChangeEvent, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

export default function FirebaseTest (): JSX.Element {
  const [inputText, setInputText] = useState('')
  const [sentStrings, setSentStrings] = useState<string[]>([])
  const [dbStrings, setDBStrings] = useState<string[]>([])

  useEffect(() => {
    const getDBStrings = async (): Promise<void> => {
      const colRef = collection(firebaseDB, 'input-tests')
      const q = query(colRef, orderBy('age', 'desc'))
      const docList = await getDocs(q)

      setDBStrings(
        docList.docs.map(doc => {
          return doc.data().text
        })
      )
    }
    getDBStrings().catch(e => console.error(e))
  }, [sentStrings])

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value)
  }

  const sendToDB = async (): Promise<void> => {
    try {
      await setDoc(doc(firebaseDB, 'input-tests', nanoid()), {
        text: inputText,
        age: new Date().getTime()
      })
      setSentStrings(prevSentStrings => [...prevSentStrings, inputText])
    } catch (e) {
      console.error('Error sending info to DB', e)
    }
  }

  const dbStringElements = dbStrings.map(dbString => {
    return <p key={Math.random()}>{dbString}</p>
  })

  return (
    <div>
      <input
        type='text'
        onChange={handleInput}
        name='test-input'
        value={inputText}
      />
      <button type='button' onClick={sendToDB}>
        Send to DB
      </button>
      {dbStringElements}
    </div>
  )
}
