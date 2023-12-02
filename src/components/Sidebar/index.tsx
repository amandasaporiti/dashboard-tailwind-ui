import { Logo } from './components/Logo'
import { NavItem } from './components/NavItem'
import {
  Home,
  BarChart,
  CheckSquare,
  Flag,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
} from 'lucide-react'
import { UsedSpaceWidget } from './components/UsedSpaceWidget'
import { Profile } from './components/Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>

        <InputControl placeholder="Search" />
      </InputRoot>

      <nav className="space-y-1.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-1.5 ">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>
      <UsedSpaceWidget />
      <div className="h-px  bg-zinc-200" />
      <Profile />
    </aside>
  )
}
