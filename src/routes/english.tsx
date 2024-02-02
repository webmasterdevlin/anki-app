import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/english')({
  component: English,
});

function English() {
  return <></>;
}
