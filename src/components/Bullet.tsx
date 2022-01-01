import axios from "axios"
import { useEffect, useState } from "react"

type Bullet = {
  parent?: number,
  collection: number,
  root: number,
  body: string,
  state: string,
  date: string,
  type: string,
  priority?: boolean,
  inspiration?: boolean,
  schedule?: number,
  migration?: number,
  children?: Array<Bullet>
}

export const Bullet = (props: {bullet?: Bullet}) => {

  const [data, setData] = useState({})
  async function getBulletData() {
    const res = await axios.get("/bullets/1")
    console.log(JSON.stringify(res.data))
    setData(res.data)
  }

  useEffect(() => {
    getBulletData()
  }, [])

  return (
    <p>
      {JSON.stringify(data)}
    </p>
  )
}