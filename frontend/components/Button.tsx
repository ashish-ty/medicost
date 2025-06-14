import { Button as ShadButton, ButtonProps } from '@shadcn/ui';

export default function Button(props: ButtonProps) {
  return <ShadButton {...props} className="rounded-lg shadow p-2" />;
}