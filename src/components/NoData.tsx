import Icon from './Icon';

export default function NoData() {
  return (
    <div className="flex items-center flex-col items-center py-12">
      <div>
        <Icon name="faDatabase" className="text-3xl" />
        <Icon name="faSlash" className="text-3xl ml-[-32]" />
      </div>
      <span className="p-2">No data found</span>
    </div>
  )
}