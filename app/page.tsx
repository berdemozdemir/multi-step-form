import { paths } from '@/lib/paths';
import { redirect } from 'next/navigation';

export default function RootPage() {
  return redirect(paths.name);
}
