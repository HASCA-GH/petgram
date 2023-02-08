import {useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setValue] = useState(()=> {
      try {
        const item = localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : initialValue
      } catch (error) {
        return initialValue
      }
    })
    
    const setLocalStorage = value => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
      } catch (error) {
        console.error(error)
      }
    }
  
    return [storedValue, setLocalStorage]
  
  }