'use client';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();
  const handlePlaceOrder = () => {
    // Logic to place the order
    console.log('Order placed!');
    router.push('/');
  };
  return (
    <>
      <div className='p-4'>OrderProduct</div>
      <button onClick={handlePlaceOrder} className='bg-blue-500 text-white p-2 rounded'>
        Place Order
      </button>
    </>
  );
}
