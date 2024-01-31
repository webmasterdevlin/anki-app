import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/english')({
  component: () => <div>Hello /english!</div>
})