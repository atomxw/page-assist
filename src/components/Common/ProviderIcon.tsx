import { ChromeIcon, CpuIcon } from "lucide-react"
import { OllamaIcon } from "../Icons/Ollama"

export const ProviderIcons = ({
  provider,
  className
}: {
  provider: string
  className?: string
}) => {
  switch (provider) {
    case "chrome":
      return <ChromeIcon className={className} />
    case "custom":
      return <CpuIcon className={className} />
    default:
      return <OllamaIcon className={className} />
  }
}
