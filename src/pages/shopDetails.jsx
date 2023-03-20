import { useParams } from "react-router-dom"

export default function ShopDetails() {
     const { productId } = useParams()
     return (
          <main>
               <h2>{productId}</h2>
          </main>
     )
}