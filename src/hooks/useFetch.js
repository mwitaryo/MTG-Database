import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  


  useEffect(async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      await setLoading(false)
      setData(data.data)
    } catch (err) {
      setError(err)
    }
  }, [])

  return [data, loading, error]
}