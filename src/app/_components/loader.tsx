export default function Loader({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className='flex min-h-[40vh] items-center justify-center'>
      <div className='flex items-center gap-3 rounded-lg bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm'>
        <span className='inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-800' />
        <span className='text-gray-700'>{label}</span>
      </div>
    </div>
  );
}
