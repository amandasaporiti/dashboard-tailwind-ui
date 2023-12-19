import { Button } from '@/components/Button'
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/amandasaporiti.png"
        alt="Amanda"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Amanda Saporiti
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          amandasantos@email.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}
