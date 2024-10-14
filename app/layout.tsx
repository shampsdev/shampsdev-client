import './index.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>shamps.dev</title>
        <meta name="description" content="Сайт команды разработчиков шампиньоны." />
      </head>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
