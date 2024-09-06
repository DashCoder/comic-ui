import Image from 'next/image'
import { Roboto } from 'next/font/google'

const font1 = Roboto({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default function Home(props) {
  return (
    <>
      <h1 className={font1.className}>Kids Comic</h1>
      <p>UI part of educational AI generated kid comicstrip</p>
      <h2 className={font1.className}>My Comic - Why do oranges stick together</h2>
      {props.panels.map((panel, index) => {
        return (
          <div key={index}>
            <Image
                src={`${panel.url}`}
                width={500}
                height={500}
                alt={panel.title}
            />
            <p className={font1.className}>{panel.content}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://ukfilestore1.blob.core.windows.net/demo/demo.json?si=Internet%20User&sv=2022-11-02&sr=c&sig=YQ7JTn6H7JiBW%2BUKlQ399BurziR8WtAAkJVarIonWOY%3D")
  const data = await response.json()

  return {
    props: {
      panels: data.panels
    }
  }
}