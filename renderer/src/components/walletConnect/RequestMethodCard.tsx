
/**
 * Types
 */
interface IProps {
  methods: string[]
}

/**
 * Component
 */
export default function RequestMethodCard({ methods }: IProps) {
  return (
    <div className='mb-4'>
      <h1 className='mt-4 text-sm'>Methods</h1>
      <h1 className='mt-2 text-xs opacity-50'>{methods.map(method => method).join(', ')}</h1>
    </div>
  )
}
