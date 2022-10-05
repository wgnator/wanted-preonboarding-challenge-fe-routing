import { useRouter } from './MyRouter';

export function Root() {
  const { push } = useRouter();
  return (
    <>
      <div>root</div>
      <button onClick={() => push('/about')}>about</button>
    </>
  );
}

export function About() {
  const { push } = useRouter();
  return (
    <>
      <div>about</div>
      <button onClick={() => push('/')}>go back to main</button>
    </>
  );
}
