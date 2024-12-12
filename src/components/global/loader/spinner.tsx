import { Loader } from "lucide-react"

type SpinnerProps = {
    color?: string
  }
  
  export const Spinner = ({ color }: SpinnerProps) => {
    return (
      <Loader className="animate-spin" />
    )
  }