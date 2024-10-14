import './globals.css';

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
        <meta
          name='description'
          content='Мы команда разработчиков Шампиньоны из ИТМО. От побед в хакатонах logo и создания TravelTech logo решений выросли в IT-микроагентство. logo Здесь рассказываем о наших проектах и достижениях. Всегда открыты для новых идей и сотрудничества.'
        />

        <meta property='og:title' content='Шампиньоны' />
        <meta
          property='og:description'
          content='Мы команда разработчиков Шампиньоны из ИТМО. От побед в хакатонах logo и создания TravelTech logo решений выросли в IT-микроагентство. logo Здесь рассказываем о наших проектах и достижениях. Всегда открыты для новых идей и сотрудничества.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='/preview.png' />
        <meta property='og:image' content='/preview.png' />
        <meta property='og:url' content='https://shamps.dev' />
      </head>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
