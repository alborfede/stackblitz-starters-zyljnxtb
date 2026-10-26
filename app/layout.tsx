import './globals.css'; // Importamos tu CSS global aquí

export const metadata = {
  title: 'Prensa Obrera',
  description: 'Prototipo de artículo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
