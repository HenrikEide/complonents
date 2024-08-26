"use client";
import Button from '../components/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
      <h1 className="text-4xl font-bold mb-6">Component Showcase</h1>
      <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
      <div className="flex w-1/2 justify-evenly">
        <div>
          <Button onClick={() => {}} size='small'>Small button</Button>
        </div>
        <div>
          <Button onClick={() => {}}>Medium button</Button>
        </div>
        <div>
          <Button onClick={() => {}} size='large'>Large button</Button>
        </div>
      </div>
      <div className="flex w-1/3 justify-evenly">
        <Button onClick={() => {}} variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline button</Button>
      </div>
    </main>
  );
}
