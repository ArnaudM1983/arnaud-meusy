import { Work } from '@/components/Work';

export const metadata = {
  title: "Work | Arnaud Meusy",
  description: "Découvrez les projets récents d'Arnaud Meusy.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32">
      <Work />
    </main>
  );
}