export interface Post {
  id: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Meu primeiro post',
    content: 'Este é o conteúdo do meu primeiro post!',
  },
  {
    id: '2',
    title: 'Aprendendo React com TypeScript',
    content: 'React + TypeScript é uma combinação poderosa!',
  },
];