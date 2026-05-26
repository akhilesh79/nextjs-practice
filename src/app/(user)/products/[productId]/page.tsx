export default async function Product({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return (
    <div>
      <h5>Product Page</h5>
      <p>Product ID: {productId}</p>
    </div>
  );
}
