import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

interface IconProps {
  name: keyof typeof Icons;
  className?: string;
}

export default function Icon({ name, ...props }: IconProps) {
  return (
    <FontAwesomeIcon icon={Icons[name] as Icons.IconDefinition} {...props} />
  )
}
