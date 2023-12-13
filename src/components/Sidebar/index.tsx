'use client'

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
  Menu,
} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { UsedSpaceWidget } from './components/UsedSpaceWidget'
import { Profile } from './components/Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { useState } from 'react'
import { Button } from '../Button'

export function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0"
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button type="button" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
