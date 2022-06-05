import React from 'react';
import { useRouter } from 'next/router'
export default function Review() {
    const router = useRouter();
    const {productId, reviewId} = router.query;
  return (
    <div><h1>Reweiw ID : {reviewId} for product ID : {productId}</h1></div>
  )
}
